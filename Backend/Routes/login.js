const express = require("express");
const Router = express();
const dbQuery = require("../database/dbhelper.js");
const bcrypt = require("bcrypt");
const { SECRET , SALTROUND } = require("../constants");
const jwt = require("jsonwebtoken");

Router.post("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);
        const {loginUsername,loginPassword} = request.body;

        if(loginUsername && loginPassword){
            let query = "select * from users where username = ?";
            let params = [loginUsername];
            let outputFromDB = await dbQuery(query,params);

            if(outputFromDB.length > 0){
                if(bcrypt.compareSync(loginPassword , outputFromDB[0].password)){
                    response.send({
                        message : "login successfull",
                        token : jwt.sign({userId : outputFromDB[0].userId, username : outputFromDB[0].username},SECRET)
                    })
                } else {
                    throw "Invalid Password";
                }
            } else{
                throw "Username doesnt exist in Database"
            }
        } else {
            throw "Enter every Field (Backend)"
        }
    } catch (error) {
        console.log("login error(POST) = ",error);
        response.status(500).send(error);
    }
})

Router.patch("/forgotPassword" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);
        const {fpUsername,fpPassword} = request.body;

        if(fpUsername && fpPassword){
            let query = "select * from users where username = ?";
            let params = [fpUsername];
            let outputFromDB = await dbQuery(query,params);
            if(outputFromDB.length > 0){
                query = `update users 
                        set password = ?
                        where username = ?
                        `
                params = [bcrypt.hashSync(fpPassword,SALTROUND) , fpUsername];
                await dbQuery(query,params);
                response.send(`${fpUsername} password Changed Successfully`);
            } else {
                throw "Username doesnt exist in Database"
            }
        } else {
            throw "Enter every Field (Backend)"
        }
    } catch (error) {
       console.log("forgotPassword error(POST) = ",error);
        response.status(500).send(error); 
    }
})

module.exports = Router;
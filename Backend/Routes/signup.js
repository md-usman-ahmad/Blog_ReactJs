const express = require("express");
const dbQuery = require("../database/dbhelper");
const Router = express();
const bcrypt = require("bcrypt");
const { SALTROUND } = require("../constants");

Router.post("/", async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);
        const {firstName , age , gender , username , email, password} = request.body;


        if(firstName && age && gender && username && email && password) {
            let query = "select * from users where username = ?";
            let params = [username];
            let outputFromDB = await dbQuery(query,params);
            console.log("checking if user Already Exist or not = ",outputFromDB);

            if(outputFromDB.length === 0){
                query = "insert into users(firstname , age , gender , username , email , password , provider) values(?,?,?,?,?,?,?)"
                params = [firstName , age , gender , username , email , bcrypt.hashSync(password,SALTROUND) , "local"];
                await dbQuery(query , params);

                response.send(`${username} added into DB successfully`);
            } else{
                throw "Username already existt!!! try different username";
            }
        } else {
            throw "Enter EveryField above";
        }


    } catch (error) {
        console.log("signup error(POST) = ",error);
        response.status(500).send(error);
    }
})


module.exports = Router;
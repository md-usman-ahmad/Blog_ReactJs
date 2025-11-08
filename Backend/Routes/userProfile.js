const express = require("express");
const Router = express.Router();
const dbQuery  = require("../database/dbhelper.js");
const {AuthMiddleware} = require("../middleware.js");


Router.use(AuthMiddleware);

Router.get("/", async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        const {currentLoggedInuserId , currentLoggedInusername} = request;        

        let query = "select * from users where userId = ?";
        let params = [currentLoggedInuserId];
        let outputFromDB = await dbQuery(query,params);
        console.log(`currentLoggedInUser-(${currentLoggedInusername}) details `,outputFromDB);
        response.send(outputFromDB)        

    } catch (error) {
        console.log("userProfile error(GET) = ",error);
        response.status(500).send(error);
    }
})

Router.patch("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);

        const {firstname , age, Gender , email} = request.body;
        const {currentLoggedInuserId , currentLoggedInusername} = request;
        if(firstname && age && Gender && email){
            let query = `update users
                        set firstname = ? , age = ? , gender = ? , email = ?
                        where userId = ?
                        `  
            let params = [firstname , age , Gender, email , currentLoggedInuserId];
            await dbQuery(query , params);
            response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) information/bio updated`);

        } else {
            throw "please provide every detail for update"
        }    
    } catch (error) {
        console.log("updateUserProfile error(Patch) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;
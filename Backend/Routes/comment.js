const express = require("express");
const Router = express.Router();
const {AuthMiddleware} = require("../middleware.js");
const dbQuery = require("../database/dbhelper.js");


Router.use(AuthMiddleware);

Router.get("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.query = ",request.query);

        const {blogId} = request.query;
        console.log("blogId comment = ",blogId);

        let query = `select firstname,comments.*
                     from comments
                     inner join users on users.userId = comments.uId
                     where bId = ?
                    `
        let params = [blogId];
        let outputFromDB = await dbQuery(query , params);
        console.log("outputFromDB comments = ",outputFromDB);
        response.send(outputFromDB);    


    } catch (error) {
        response.status(500).send(error);
    }
})

Router.post("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);

        const {userComment , blogId} = request.body;
        const {currentLoggedInuserId,currentLoggedInusername} = request;
        console.log("userComment = ",userComment, "blogId = " ,blogId , "currentLoggedInuserId = " ,currentLoggedInuserId);

        let query = "insert into comments(bId , uId , content, commentDate) values(?,?,?,?)";
        let params = [blogId , currentLoggedInuserId , userComment , new Date().toISOString().slice(0,19).replace("T" , " ") ];
        await dbQuery(query , params);

        response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) Comment Added on blogId${blogId}`);

    } catch (error) {
        console.log("error = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router
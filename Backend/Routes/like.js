const express = require("express");
const Router = express.Router();
const dbQuery = require("../database/dbhelper.js");
const {AuthMiddleware} = require("../middleware.js");


Router.post("/" , AuthMiddleware ,async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);

        const {blogId,title} = request.body;
        const {currentLoggedInuserId , currentLoggedInusername} = request;

        let query = "insert into likedBlogs(bId , uId) values(?,?)";
        let params = [blogId , currentLoggedInuserId];
        await dbQuery(query , params);

        response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) Liked👍 [${title}]`)


    } catch (error) {
        console.log("like error(POST) = ",error);
        response.status(500).send(error);
    }
})



module.exports = Router;
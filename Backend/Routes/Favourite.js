const express = require("express");
const Router = express.Router();

const {AuthMiddleware} = require("../middleware.js");
const dbQuery = require("../database/dbhelper.js");


Router.get("/" , AuthMiddleware ,async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.query = ",request.query);

        const {blogId} = request.query;
        const {currentLoggedInuserId} = request;

        let query = "select * from favouriteBlogs where uId = ? AND bId = ?";
        let params = [currentLoggedInuserId , blogId];
        let outputFromDB = await dbQuery(query , params);
        console.log(outputFromDB);
        if(outputFromDB.length === 0 ){
            response.send(false);
        } 
          response.send(true);


    } catch (error) {
        console.log("/Favourite error(POST) = ",error);
        response.status(500).send(error);
    }
})


Router.post("/" , AuthMiddleware ,async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);
        const {blogId , title} = request.body;
        const {currentLoggedInuserId , currentLoggedInusername} = request;

        let query = "insert into favouriteBlogs(bId , uId) values(?,?)";
        let params = [blogId , currentLoggedInuserId];
        await dbQuery(query,params);

        response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) added to Favourites[${title}]`);

    } catch (error) {
        console.log("/Favourite error(POST) = ",error);
        response.status(500).send(error);
    }
})

Router.delete("/" , AuthMiddleware ,async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);
        const {blogId , title} = request.body;
        const {currentLoggedInuserId , currentLoggedInusername} = request;

        let query = "delete from favouriteBlogs where bId = ? AND uId = ?";
        let params = [blogId , currentLoggedInuserId];

        await dbQuery(query, params);

        response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) Removed from Favourites[${title}]`)

    } catch (error) {
        console.log("/Favourite error(DELETE) = ",error);
        response.status(500).send(error);
    }
})



module.exports = Router;
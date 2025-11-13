const express = require("express");
const Router = express.Router();
const {AuthMiddleware}  = require("../middleware.js");
const dbQuery = require("../database/dbhelper.js");

Router.get("/" , AuthMiddleware , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);

        const {currentLoggedInuserId , currentLoggedInusername} = request;
        let query = `select * 
                    from Blogs 
                    Inner join favouriteBlogs on favouriteBlogs.bId = Blogs.blogId
                    where favouriteBlogs.uId = ?`;
        let params = [currentLoggedInuserId];
        let outputFromDB = await dbQuery(query , params);

        response.send(outputFromDB);

    } catch (error) {
        console.log("getFavouriteBlogs error(GET) = ",error);
        response.status(500).send(error);
    }
})



module.exports = Router;
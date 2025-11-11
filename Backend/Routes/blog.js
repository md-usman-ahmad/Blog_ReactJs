const express = require("express");
const dbQuery = require("../database/dbhelper");
const { AuthMiddleware } = require("../middleware");

const Router = express.Router();


Router.use(AuthMiddleware)
Router.post("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);

        const {imgurl,title,description,category} = request.body;
        const {currentLoggedInuserId , currentLoggedInusername} = request;

        if(imgurl && title && description && category){
            let query = "insert into Blogs(imgurl , title , description , createdAt ,category , uId) values(?,?,?,?,?,?)";
            let params = [imgurl , title, description , new Date().toISOString().slice(0,19).replace("T" , " ") ,category , currentLoggedInuserId];
            await dbQuery(query , params);

            response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) ${title} Blog Added`);
        } else {
            throw "Enter every field";
        }

    } catch (error) {
        console.log("blog error(POST) = ",error);
        response.status(500).send(error);
    }
})

Router.get("/", async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        const {currentLoggedInuserId} = request;

        let query = "select * from Blogs where uId = ?";
        let params = [currentLoggedInuserId];
        let outputFromDB = await dbQuery(query,params);
        response.send(outputFromDB);

    } catch (error) {
        console.log("blog error(POST) = ",error);
        response.status(500).send(error);
    }
})

Router.delete("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.query = ",request.query);

        const {blogId} = request.query;
        const {currentLoggedInuserId , currentLoggedInusername} = request;

        let query = "delete from Blogs where blogId = ? AND uId = ?";
        let params = [blogId , currentLoggedInuserId];
        await dbQuery(query , params);
        response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) blogId-${blogId} deleted`);

    } catch (error) {
        console.log("blog error(DELETE) = ",error);
        response.status(500).send(error);
    }
})

Router.get("/singleBlog" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        const {blogId} = request.query;
        const {currentLoggedInuserId} = request;

        
        let query = "select * from Blogs where blogId = ? AND uId = ?";
        let params = [blogId , currentLoggedInuserId];
        let outputFromDB = await dbQuery(query,params);
        response.send(outputFromDB);

    } catch (error) {
        console.log("blog error(GET) = ",error);
        response.status(500).send(error);
    }
})

Router.patch("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.body = ",request.body);

        const {blogId , imgurl,title,description,category} = request.body;
        const {currentLoggedInuserId , currentLoggedInusername} = request;

        let query = `update Blogs
                     set imgurl = ? , title = ? , description = ? , category = ?
                     where blogId = ? AND uId = ?
                    `
        let params = [imgurl,title,description,category , blogId , currentLoggedInuserId];
        await dbQuery(query , params);
        response.send(`${currentLoggedInusername}(userId-${currentLoggedInuserId}) blogId-${blogId} Updated`);

    } catch (error) {
        console.log("blog error(PATCH) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;
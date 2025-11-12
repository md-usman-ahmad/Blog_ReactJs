const express = require("express");
const Router = express.Router();
const dbQuery = require("../database/dbhelper.js");


Router.get("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);

        let query = "select * from Blogs order by blogId DESC limit 4";
        let params = [];
        let outputFromDB = await dbQuery(query,params);
        console.log(outputFromDB);
        response.send(outputFromDB);
        
    } catch (error) {
        console.log("RecentBlogs error(GET) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;
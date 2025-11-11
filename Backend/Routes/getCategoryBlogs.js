const express = require("express");
const dbQuery = require("../database/dbhelper");
const Router = express.Router();

Router.get("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);
        console.log("request.query = ",request.query);

        const {categoryName} = request.query;

        let query = "select * from Blogs where Category = ?"
        let params = [categoryName];
        let outputFromDB = await dbQuery(query,params);
        
        response.send(outputFromDB);
    } catch (error) {
        console.log("getCategoryBlogs error(GET) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;
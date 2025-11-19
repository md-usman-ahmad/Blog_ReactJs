const express = require("express");
const dbQuery = require("../database/dbhelper");
const Router = express.Router();

Router.get("/" , async function(request,response){
    try {
        console.log("request.originalUrl = ",request.originalUrl);
        console.log("request.method = ",request.method);

        // group by = Same cheezon ko ek saath rakhna   
        let query = `select Blogs.*,COUNT(*) as totalLikes
                    from likedBlogs
                    inner join Blogs on Blogs.blogId = likedBlogs.bId
                    group by likedBLogs.bId              
                    order by totalLikes DESC limit 4
                    `
        let params = [];
        let outputFromDB = await dbQuery(query,params);
        console.log("Popular Blogs = ",outputFromDB);
        
        response.send(outputFromDB);

    } catch (error) {
        console.log("PopularBlogs error(GET) = ",error);
        response.status(500).send(error);
    }
})

module.exports = Router;
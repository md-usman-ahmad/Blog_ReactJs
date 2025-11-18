const express = require("express");
const Router = express.Router();
const dbQuery = require("../database/dbhelper.js");
const { AuthMiddleware } = require("../middleware.js");

Router.get("/", AuthMiddleware, async function (request, response) {
  try {
    console.log("request.originalUrl = ", request.originalUrl);
    console.log("request.method = ", request.method);
    console.log("request.query = ", request.query);

    let totalLikes = 0;
    const { blogId } = request.query;
    const { currentLoggedInuserId, currentLoggedInusername } = request;

    let query = "select COUNT(*) AS totalLikes from likedBlogs where bId = ?";
    let params = [blogId];

    let outputFromDB = await dbQuery(query, params);
    totalLikes = outputFromDB[0].totalLikes;

    query = "select * from likedBlogs where bId = ? AND uId = ?";
    params = [blogId, currentLoggedInuserId];

    outputFromDB = await dbQuery(query, params);
    console.log("Liked = ", outputFromDB);

    outputFromDB.length === 0
      ? response.send({ totalLikes , IsLiked : false })
      : response.send({ totalLikes , IsLiked : true });
  } catch (error) {
    console.log("like error(POST) = ", error);
    response.status(500).send(error);
  }
});

Router.post("/", AuthMiddleware, async function (request, response) {
  try {
    console.log("request.originalUrl = ", request.originalUrl);
    console.log("request.method = ", request.method);
    console.log("request.body = ", request.body);

    const { blogId, title } = request.body;
    const { currentLoggedInuserId, currentLoggedInusername } = request;

    let query = "insert into likedBlogs(bId , uId) values(?,?)";
    let params = [blogId, currentLoggedInuserId];
    await dbQuery(query, params);

    response.send(
      `${currentLoggedInusername}(userId-${currentLoggedInuserId}) Liked👍 [${title}]`
    );
  } catch (error) {
    console.log("like error(POST) = ", error);
    response.status(500).send(error);
  }
});

Router.delete("/", AuthMiddleware, async function (request, response) {
  try {
    console.log("request.originalUrl = ", request.originalUrl);
    console.log("request.method = ", request.method);
    console.log("request.body = ", request.body);

    const { blogId, title } = request.body;
    const { currentLoggedInuserId, currentLoggedInusername } = request;

    let query = "delete from likedBlogs where bId = ? AND uId = ?";
    let params = [blogId, currentLoggedInuserId];

    await dbQuery(query, params);
    response.send(
      `${currentLoggedInusername}(userId-${currentLoggedInuserId}) remove Like👍 from [${title}]`
    );
  } catch (error) {
    console.log("Dislike error(POST) = ", error);
    response.status(500).send(error);
  }
});

module.exports = Router;

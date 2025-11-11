const express = require("express");
const app = express();

const constants = require("./constants.js");
const bodyParser = require("body-parser");
const cors = require("cors");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

const signupRouter = require("./Routes/signup.js");
const loginRouter = require("./Routes/login.js");
const userProfileRouter = require("./Routes/userProfile.js");
const blogRouter = require("./Routes/blog.js");
const getCategoryBlogsRouter = require("./Routes/getCategoryBlogs.js");
app.use("/signup" , signupRouter);
app.use("/login" , loginRouter);
app.use("/userProfile" , userProfileRouter);
app.use("/blog" , blogRouter);
app.use("/getCategoryBlogs" , getCategoryBlogsRouter);


app.listen(constants.PORT , function(){
    console.log(`server is running on PORT : ${constants.PORT}`);
} )
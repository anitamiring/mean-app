const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');

 const app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));

 app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PATCH, DELETE, OPTIONS"
    );
   next();
 });

 app.post("api/posts", (req, res, next) => {
   const post = new Post({
     title: req.body.title,
     content: req.body.content
   });
   console.log('post');
   res.status(201).json({
     message: "Post added successfully!"
   });
 });

 app.get("/api/posts",(req, res, next) => {
   const posts = [
     {
       id: 'dvobneoep4203',
       title: 'First server-side post',
       content: 'This is comming from server!'
     },
     {
      id: 'h9wh49hoiqh0f',
      title: 'Second server-side post',
      content: 'This is comming from server!'
    },
   ];
   console.log('First middleware');
   res.status(200).json({
     message: 'Posts fetched succesfully',
     posts: posts
   });
 });


 module.exports = app;

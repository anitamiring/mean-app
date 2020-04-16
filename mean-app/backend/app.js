const express = require('express');

 const app = express();

 app.use((req, res, next) => {
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

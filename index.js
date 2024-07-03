const express = require('express');
const app = express();
const PORT = 3000;

let courses = [
  {id:1,name:"java"},
  {id:2,name:"javascript"},
  {id:3,name:"python"},
];

app.get("/courses" , (req,res)=>{
  res.json(courses);
}).listen(PORT,()=>{
  console.log("server started!");
})
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(middleware);

let courses = [
  {id:1,name:"java"},
  {id:2,name:"javascript"},
  {id:3,name:"python"},
  {id:4,name:"RAR"},
  {id:5,name:"Node"},
  {id:6,name:"SpringBoot"}
];

app.get("/courses" , (req,res)=>{
  res.json(courses);
});

app.post("/courses" , (req,res)=>{
  console.log(req.body);
  let singleCourse = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(singleCourse);
  res.send(courses);
});

app.put("/courses/:id", (req, res) => {
  console.log(req.body);
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);
  course.name = req.body.name;
  res.send(course);
});

app.delete("/courses/:id", (req, res) => {
  console.log(req.body);
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);
  courses.splice(courseId-1,1);
  res.send(course);
});

function middleware(req,res,next){
  console.log("called");
  console.log("ip "+req.ip);
  console.log("method: "+req.method);
  console.log("hostname: "+req.hostname);
  console.log("Date: "+ new Date().toISOString().split('T')[0]);
  next();
}
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

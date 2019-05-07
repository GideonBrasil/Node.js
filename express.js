const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/", (req, res) => {
  res.send("This is an express server baby!");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:year/:month", (req, res) => {
  res.send(req.params);
});

app.get("/api/courses/:id", (req, res) => {
  const findCourse = courses.find(
    course => course.id === parseInt(req.params.id)
  );
  if (!findCourse)
    res.status(404).send("The course with the given ID does not exist.");
  res.send(findCourse);
});

app.listen(3000, () => console.log("Listening on port 3000"));

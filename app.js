const express = require("express");
const mongoose = require("mongoose");
const Visitor = require("./models/visitor.js");
const app = express();
const baseURLdev = "http://localhost:8080/";
const password = "0neP1ece";
const dbURI = `mongodb+srv://SoTilted:${password}@cluster0.ua68r8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const dbURI2 = 'mongodb://mongo:xbZqPXuZRQtUvpqMFzNOjJRJlkvbbwPR@viaduct.proxy.rlwy.net:44351' 
//  Connect to db
mongoose
  .connect(dbURI2)
  .then((result) => {
    console.log("Connected to db");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("./dist/index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  const visitor = new Visitor({
    test1: {
      myAudio: req.body.myAudio,
      oldAudio: req.body.oldAudio,
    },
  });
  visitor.save();
  res.send("Thanks for your contribution!");

});
app.use(express.static("dist"));

// export data to json command : mongoexport --uri mongodb+srv://SoTilted:"0neP1ece"@cluster0.ua68r8q.mongodb.net/"test" --collection "visitors" --type "json" --out "data_test"

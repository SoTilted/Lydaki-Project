const express = require("express");
const mongoose = require("mongoose");
const Visitor = require("./models/visitor.js");
const app = express();
const baseURLdev = "http://localhost:8080/";
const password = "0neP1ece";
const dbURI = `mongodb+srv://SoTilted:${password}@cluster0.ua68r8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//  Connect to db
mongoose
  .connect(dbURI)
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
      myAudio1: req.body.myAudio1,
      oldAudio1: req.body.oldAudio1,
      myAudio2: req.body.myAudio2,
      oldAudio2: req.body.oldAudio2,
      myAudio3: req.body.myAudio3,
      oldAudio3: req.body.oldAudio3,
      myAudio4: req.body.myAudio4,
      oldAudio4: req.body.oldAudio4,
      myAudio5: req.body.myAudio5,
      oldAudio5: req.body.oldAudio5,
      myAudio6: req.body.myAudio6,
      oldAudio6: req.body.oldAudio6,
    },
    test2: {
      myAudio1: req.body.myAudio7,
      oldAudio1: req.body.oldAudio7,
      myAudio2: req.body.myAudio8,
      oldAudio2: req.body.oldAudio8,
      myAudio3: req.body.myAudio9,
      oldAudio3: req.body.oldAudio9,
      myAudio4  : req.body.myAudio10,
      oldAudio4: req.body.oldAudio10,
      myAudio5: req.body.myAudio11,
      oldAudio5: req.body.oldAudio11,
      myAudio6: req.body.myAudio12,
      oldAudio6: req.body.oldAudio12,
    },
  });
  visitor.save();
  res.send("Thanks for your contribution!");

});
app.use(express.static("dist"));

// export data to json command : mongoexport --uri mongodb+srv://SoTilted:"0neP1ece"@cluster0.ua68r8q.mongodb.net/"test" --collection "visitors" --type "json" --out "data_test"

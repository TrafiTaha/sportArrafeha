//import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
//import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
const path = require("path");
// import axios module
const axios = require('axios');
// import jsonwebtoken module
const jwt = require("jsonwebtoken");
// import express-session module
const session = require("express-session")
// create express application
const app = express();
// connect Express Application with DB via mongoose
// sportDB: le nom de la DB
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");
// configuration

// Models importation
const MatchModel = require("./models/match");
const PlayerModel = require("./models/player");
const TeamModel = require("./models/team");
const ImcModel = require("./models/imc");
const userModel = require("./models/user");
const user = require("./models/user");
const { log } = require("console");
const team = require("./models/team");
// send JSON responses
app.use(bodyParser.json());
// get objects from request
app.use(bodyParser.urlencoded({ extended: true }));
// path configuration(shortcut)
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }
 const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
}
cb(null, 'backend/images')
},
filename: (req, file, cb) => {
const name = file.originalname.toLowerCase().split(' ').join('-');
const extension = MIME_TYPE[file.mimetype];
const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
extension;
cb(null, imgName);
}
});
const secretKey = 'Croco2023Venus';
app.use(session({
secret: secretKey,
}));
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//DB simulation
let matchsTab = [
  { id: 1, scoreOne: 3, scoreTwo: 0, teamOne: "FCB", teamTwo: "RMD" },
  { id: 2, scoreOne: 0, scoreTwo: 2, teamOne: "juv", teamTwo: "rom" },
  { id: 3, scoreOne: 4, scoreTwo: 1, teamOne: "atm", teamTwo: "sev" },
  { id: 4, scoreOne: 2, scoreTwo: 3, teamOne: "liv", teamTwo: "int" },
  { id: 5, scoreOne: 2, scoreTwo: 2, teamOne: "lever", teamTwo: "milan" },
];

let teamsTab = [
  { id: 1, name: "Ba9lewa", owner: "Ali", stadium: 1 },
  { id: 2, name: "EST", owner: "Med", stadium: 2 },
  { id: 2, name: "camp", owner: "salah", stadium: 2 },
];

let playersTab = [
  { id: 1, name: "CR7", age: 38, position: "FW", description: "......" },
  { id: 2, name: "LM10", age: 35, position: "FW", description: "......" },
  { id: 3, name: "VJR7", age: 21, position: "LW", description: "......" },
];
function generateId(T) {
  if (T.length == 0) {
    return 1;
  } else {
    var max = T[0].id;
    for (let i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
    return max + 1;
  }
}
//business logic

//BUSINESS LOGIC: MATCHS PART

//business logic:get all matchs
app.get("/matchs", (req, res) => {
  //traitement de la request
  console.log("Here into BL : Get All Matchs");
  MatchModel.find().then((data) => {
    res.json({ matchs: data });
  });
});

//business logic: get match by ID
// ID is a param
app.get("/matchs/:id", (req, res) => {
  //traitement de la request
  let id = req.params.id;

  MatchModel.findOne({ _id: id }).then((data) => {
    res.json({ match: data });
  });
  //if (!foundedMatch) {
  //  return res.json({ match: "not found" });
  //} else {
  //  res.json({ foundedMatch });
  //}
});

//business logic: delete match by ID
app.delete("/matchs/:id", (req, res) => {
  let id = req.params.id;
  MatchModel.deleteOne({ _id: id }).then((data) => {
    console.log("here data after delete", data);
    if (data.deletedCount == 1) {
      res.json({ msg: "deleted with success" });
    } else {
      res.json({ msg: "Not deleted" });
    }
  });
});

//business logic: update match
app.put("/matchs", (req, res) => {
  //traitement de la request
  console.log("Here into BL : update match");
  let newMatch = req.body;
  MatchModel.updateOne({ _id: newMatch._id }, newMatch).then((data) => {
    console.log("here data after update", data);
    data.nModified == 1
      ? res.json({ msg: "edited with success" })
      : res.json({ msg: "not Edited" });
  });
  res.json({ msg: "Edited with success" });
});
//business logic: add match
app.post("/matchs", (req, res) => {
  //traitement de la request
  console.log("Here into BL : add match", req.body);
  // match=> instance de type match
  let match = new MatchModel(req.body);
  // save=> methode predefinie mongoose
  match.save((err, doc) => {
    if (err) {
      res.json({ msg: "Error" });
    } else {
      res.json({ msg: "Added with success" });
    }
  });
});
// BL: serach matchs by scoreOne or scoreTwo
app.post("/matchs/search", (req, res) => {
  //traitement de la request
  let obj = req.body;
  let findedMatchs = matchsTab.filter((elt) => {
    return elt.scoreOne == obj.scoreOne || elt.scoreTwo == obj.scoreTwo;
  });
  res.json({ tab: findedMatchs });
});

// BL: serach matchs by scoreOne or scoreTwo 2
app.get("/matchs/:sc1/:sc2", (req, res) => {
  let scoreOne = req.params.sc1;
  let scoreTwo = req.params.sc2;
  let findedMatchs = matchsTab.filter((elt) => {
    return elt.scoreOne == scoreOne || elt.scoreTwo == scoreTwo;
  });
  res.json({ tab: findedMatchs });
});
//BUSINESS LOGIC: PLAYERS PART

//business logic:get all players
app.get("/player", (req, res) => {
  //traitement de la request
  console.log("Here into BL : Get All Players");
  PlayerModel.find().then((data) => {
    res.json({ player: data });
  });
});
//business logic: get player by ID
// ID is a param
app.get("/player/:id", (req, res) => {
  //traitement de la request
});
//business logic: delete player by ID
app.delete("/player/:id", (req, res) => {
  //traitement de la request
  console.log("here into BL: Delete player", req.params.id);
});
//business logic: update player
app.put("/player", (req, res) => {
  //traitement de la request
});
/// Business Logic : Add Player
app.post("/api/player", (req, res) => {
  try {
  Team.findById(req.body.teamId).then((team) => {
  if (!team) {
  return res.status(404).json({ message: "Team not found" });
  }
  const player = new Player({
  name: req.body.name,
  nbr: req.body.nbr,
  age: req.body.age,
  team: team._id,
  });
  player.save((err, doc) => {
  team.players.push(player);
  team.save();
  res.status(201).json(player);
  });
  });
  } catch (error) {
  res
  .status(500)
  .json({ message: "Error creating player", error: error.message });
  }
  });
  

//BUSINESS LOGIC: TEAM PART

//business logic:get all teams
app.get("/api/teams", (req, res) => {
  //traitement de la request
  team.find().then(
    (docs)=>{
      res.json({teamsTab: docs})
    }
  )
});
//business logic: get teams by ID
// ID is a param
app.get("/teams/:id", (req, res) => {
  //traitement de la request
});
//business logic: delete teams by ID
app.delete("/teams/:id", (req, res) => {
  //traitement de la request
});
//business logic: update teams
app.put("/teams", (req, res) => {
  //traitement de la request
});
//business logic: add teams
app.post("/api/teams", (req, res) => {
  //traitement de la request
  console.log("Here into BL : add team", req.body);
  // match=> instance de type match
  let team = new TeamModel(req.body);
  // save=> methode predefinie mongoose
  team.save(err, doc);
  res.json({ msg: "added with success" });
});

// business logic : imc part
app.post("/imc", async (req, res) => {
  // Convert taille from cm to m
  const tailleMeters = req.body.taille / 100;

  // Calculate the IMC
  let IMC = req.body.poids / (tailleMeters * tailleMeters);

  const imc = new ImcModel({
    name: req.body.name,
    poids: req.body.poids,
    taille: tailleMeters,
    IMC: IMC,
  });
  let msg = "";
  if (IMC < 18.5) {
    msg = " Insuffisance pondérale (maigreur)";
  } else if (IMC >= 18.5 && IMC < 25) {
    msg = "Corpulence normale";
  } else if (IMC >= 25 && IMC < 30) {
    msg = "Surpoids";
  } else if (IMC >= 30 && IMC < 35) {
    msg = "Obésité modérée";
  } else if (IMC >= 35 && IMC < 40) {
    msg = "Obésité sévère";
  } else {
    msg = "Obésité morbide ou massive";
  }
  // Save the IMC to the database
  imc.save((err, doc) => {
    if (doc) {
      res.json({ msg: msg });
    } else {
      res.json({ msg: err });
    }
  });
});

app.post("/users/signup", (req, res) => {
  console.log("here into BL: signup", multer({ storage: storage }).single('img'), req.body);
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("here crypted pwd", cryptedPwd);
    req.body.pwd = cryptedPwd;
    req.body.avatar = "http://localhost:3000/images/" + req.file.filename;
    let user = new userModel(req.body);
    user.save((err, doc) => {
      console.log("here error", err);
      console.log("here doc", doc);
      err ? res.json({ msg: err }) : res.json({ msg: doc });
    });
  });
});

// business logic login

app.post("/users/login", (req, res) => {
  let User;
  console.log("here into BL: login", req.body.email);
  user
    .findOne({ email: req.body.email })
    .then((doc) => {
      if (!doc) {
        res.json({ msg: "please check ur email" });
      } else {
        User = doc;
        return bcrypt.compare(req.body.pwd, doc.pwd);
      }
    })
    .then((pwdResult) => {
      console.log(("here pwdResult", pwdResult));
      if (!pwdResult) {
        res.json({ msg: "please check your PWD" });
      } else {
        let userData = {
          id: User._id,
          fName: User.firstName,
          lName: User.lastName,
          role: User.role,
        };
        const token = jwt.sign(userData, secretKey, { expiresIn:
          '1h' });
        res.json({ result: token });
      }
    });
});

// business logic weather 
app.post("/weather", (req,res)=>{
  console.log("here into BL : weather");
 const apiKey = "3aed92bb34812dec800d5cf64216b10b";
 const weatherUrl =
 `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${apiKey}`
 axios
 .get(weatherUrl)
 .then((response) => {
  console.log("API response", response.data.weather);
 console.log('Here response', response);
 const weather = response.data.main;
 console.log('Here weather main', weather);
 const result = {
  main: response.data.weather[0].main,
        icon: response.data.weather[0].icon,
        temp: response.data.main.temp,
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
 }
 res.status(200).json({
 result:result
 })
 });
})
// make app importable from another files
module.exports = app;

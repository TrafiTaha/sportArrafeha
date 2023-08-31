// // import mongoose module
// const mongoose = require("mongoose");

// // create match schema
// const teamSchema = mongoose.Schema({
//   name: String,
//   stadium: String,
//   Owner: String,
// });

// // Affect model name to Schema
// const team = mongoose.model("Team", teamSchema);
// // export match
// module.exports = team;
// import mongoose module
const mongoose = require("mongoose");
const teamSchema = mongoose.Schema({
  name: String,
  owner: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
});
// create Model Name "Team"
const team = mongoose.model("Team", teamSchema);
// make team exportable
module.exports = team;

// import app file
const app = require("./backend/app");
// make Server listening on port 3000: http://localhost:3000
app.listen(3000, () => {
  console.log("BE Server is listening on Port 3000 ..");
});


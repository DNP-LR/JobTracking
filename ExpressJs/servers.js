const express = require("express");

const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");

const db= require("./app/models");

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res) =>{
  res.json({message : "Welcome to my J-track App Backend "})
});

db.sequelize.sync()
  .then(() =>{
    console.log("Synced DB");
  })
  .catch((err) =>{
    console.log("Failed to sync DB:" +err.message);
  });

require("./app/routes/blockchain.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

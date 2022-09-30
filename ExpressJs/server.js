const express= require("express");
const cors = require("cors");

const app = express();

var corsOptions={
  origin:  "http://localhost:8080"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) =>{
  res.json({message: "Welcome to JTrack Application"});
});

const db = require("./model");
const Role = db.role;

db.sequelize.sync({force: true}).then(() =>{
  console.log("Drop and Resync Db")
})

function initial(){
  Role.create({
    id: 1,
    name: "user"
  });
  Role.create({
    id: 2,
    name: "Recruiter"
  });
  Role.create({
    id: 3,
    name: "Administrator"
  });

}

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}`);
});

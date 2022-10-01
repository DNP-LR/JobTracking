const db = require("../models")
const Person = db.person;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
  if(!req.body.FirstName || !req.body.LastName || !req.body.Password){
    res.status(400).send({
      message: "Content can not be blank!"
    });
    return;
  }

  const person={
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    DateOfBirth: req.body.DateOfBirth,
    Password: req.body.Password,
    Email: req.body.Email,
    Gender: req.body.Gender,
    Picture: req.body.Picture,
    PhoneNumber: req.body.PhoneNumber,
    // valid : req.body.valid ? req.body.valid : true
  };
  Person.create(person)
   .then((result) => {
     res.send(result);
   })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some Error Occurred while creating a new Person "
      });
    });
};

exports.findAll = (req, res) =>{
  Person.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err =>{
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Person"
      });
    });
};

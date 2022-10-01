const db = require("../models");
const Person = db.person;
const Op = db.Sequelize.Op;

// Create and Save a New Education
exports.create = (req, res) => {

  if (!req.body.FirstName ||
    !req.body.LastName
    // !req.body.Password ||
    // !req.body.Gender ||
    // !req.body.Email ||
    // !req.body.PhoneNumber ||
    // !req.body.DateOfBirth
  ) {
    res.status(400).send({
      message: "Content can not be empty !"
    });
    return ;
  }
  const persoiin={
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

  persoiin.create (persoiin)
    .then(data => {
      res.send(data);

    })
    .catch(err => {
      res.status(500).send({
        message :
          err.message || "Some error occurred while creating a new Block"
      });
    });
};

exports.findAll = (req, res ) =>{
  const hash = req.query.hash;
  var condition = hash ? {hash: {[Op.iLike]: `%${title}%`}}:null;

  persoiin.findAll({where : condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message :
          err.message || "Some error occurred while retrieving tutorials. "
      });
    });
};


// find all hashed data Tutorial
exports.findAllValidated = (req, res) => {
  persoiin.findAll({ where: { valid: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blocks."
      });
    });
};

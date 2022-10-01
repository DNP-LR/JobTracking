const db = require("../models")
const Recruiter = db.recruiter;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
  if(!req.body.CommercialRegister || !req.body.Longitude || !req.body.Latitude){
    res.status(400).send({
      message: "Content can not be blank!"
    });
    return;
  }

  const recruiter={
    CommercialRegister: req.body.CommercialRegister,
    Longitude: req.body.Longitude,
    Latitude: req.body.Latitude,
    Region: req.body.Region,
    Town: req.body.Town,
    Logo: req.body.Logo,
  };
  Recruiter.create(recruiter)
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
  Recruiter.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err =>{
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Person"
      });
    });
};

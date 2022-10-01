const db = require("../models")
const Education = db.education;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
  if(!req.body.EduName || !req.body.EduType || !req.body.Grade){
    res.status(400).send({
      message: "Content can not be blank!"
    });
    return;
  }

  const education={
    EduName: req.body.EduName,
    EduType: req.body.EduType,
    Grade: req.body.Grade,
    Degree: req.body.Degree,
    Major: req.body.Major,
    Country: req.body.Country,
    Town: req.body.Town,
    StartDate: req.body.StartDate,
    EndDate: req.body.EndDate,
    // valid : req.body.valid ? req.body.valid : true
  };
  Education.create(education)
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
  Education.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err =>{
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Person"
      });
    });
};

module.exports = app => {
  // const blockchain = require("../controllers/blockchain.controllers.js");
  const person = require("../controllers/person.controllers.js");
  const recruiter = require("../controllers/recruiter.controllers");
  const education = require("../controllers/education.controllers");

  var router = require("express").Router();

  //Create a new person
  router.post("/person/create", person.create);
  //View all Person
  router.get("/person/all", person.findAll);

  //Create a Recruiter
  router.post("/recruiter/create", recruiter.create);
  //View all Recruiter
  router.get("/recruiter/all", recruiter.findAll);

  //create Education
  router.post("/education/create", education.create);
  //View all Education
  router.get("/education/all", education.findAll);

  // Create a new blockchain
  // router.post("/", blockchain.create);
  // Retrieve all blockchain
  // router.get("/", blockchain.findAll);
  // Retrieve all published blockchain
  // router.get("/validated", blockchain.findAllValidated);



  app.use('/api/jtrack', router);
};

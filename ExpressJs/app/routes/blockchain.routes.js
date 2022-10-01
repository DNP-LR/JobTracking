module.exports = app => {
  const blockchain = require("../controllers/blockchain.controllers.js");
  var router = require("express").Router();
  // Create a new blockchain
  router.post("/", blockchain.create);
  // Retrieve all blockchain
  router.get("/", blockchain.findAll);
  // Retrieve all published blockchain
  router.get("/validated", blockchain.findAllValidated);
  app.use('/api/blockchain', router);
};

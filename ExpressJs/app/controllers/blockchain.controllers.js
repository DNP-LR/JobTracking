const db = require("../models");
const Blockchain = db.blockchain;
const Op = db.Sequelize.Op;

// Create and Save a New Tutorial
exports.create = (req, res) => {

  if (!req.body.hash || !req.body.hashOfPrev || !req.body.hashOfPrev) {
      res.status(400).send({
        message: "Content can not be empty !"
      });
    return ;
  }
  const block={
    hash: req.body.hash,
    hashOfPrev: req.body.hashOfPrev,
    nonce: req.body.nonce,
    data: req.body.data,
    valid : req.body.valid ? req.body.valid : true
  };

  Blockchain.create (block)
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

  Blockchain.findAll({where : condition})
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
  Blockchain.findAll({ where: { valid: true } })
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

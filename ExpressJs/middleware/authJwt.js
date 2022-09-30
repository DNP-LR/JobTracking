const jwt = require("jsonwebtoken");
const config= require("../config/auth.config");
const db= require("../model")
const {verify} = require("jsonwebtoken");
const User = db.User;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

idAdmin = (req, res) => {
  User.findByPK(req.userId).then(user => {
    user.getRole().then(role => {
      for (let i = 0; i < role.length; i++) {
        if (role[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "No role found!"
      });
      return;
    });
  });
};

isRecruiter =(req, res, next) => {
  User.findByPK(req.userId).then(user => {
    user.getRole().then(role => {
      for (let i = 0; i < role.length; i++) {
        if (role[i].name === "recruiter") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "No role found!"
      });
    });
  });
};

isRecruiterOrAdmin=(req, res, next)=>{
  User.findByPK(req.userId).then(user => {
    user.getRole().then(role => {
      for (let i = 0; i < role.length; i++) {
        if (role[i].name === "recruiter") {
          next();
          return;
        }

        if(roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "No role found!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isRecruiter: isRecruiter,
  isAdminOrRecruiter: isAdminOrRecruiter
};

module.exports = authJwt;

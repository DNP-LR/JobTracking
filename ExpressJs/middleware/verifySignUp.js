const db = require("../model");
const ROLES = db.ROLES;
const User = db.User;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    where: {
      username: req.user.username
    }
  }).then(user =>{
    if(user){
      res.status(400).send({
        message: "Failed ! username is already in use !"
      });
      return ;
    }

    User,findOne ({
      where: {
        email: req.user.email
      }
    }).then(user =>{
      if(user){
        res.status(400).send({
          message: "Failed! email is already in use!"
        });
        return ;
      }
      next();
    });
  });
};
checkRoleExisted = (req,res, next) => {
  if(req.body.role){
    for(let i=0; i < req.body.role.length; i++){
      if (!ROLES.includes(req.body.role[i])){
        res.status(400).send({
          message: "Failed ! Role does not exist" + req.body.role[i]
        });
        return
      }
    }
  }
  next();
};

const verifySignUp= {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRoleExisted: checkRoleExisted
};
module.exports = verifySignUp;

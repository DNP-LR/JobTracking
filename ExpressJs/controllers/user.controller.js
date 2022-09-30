exports.allAccess = (req, res) =>{
  res.status(200).send("Public Content");
};
exports.userBoard= (req, res) =>{
  res.status(200).send("Public Content");
}

exports.adminBaords= (req, res) =>{
 res.status(200).send("Admin Content");
}
exports.recruiter= (req, res) =>{
  res.status(200).send("Recruiter Content");
}

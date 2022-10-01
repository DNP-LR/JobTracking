module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define("Person", {
    FirstName: {
      type : Sequelize.STRING
    },
    LastName : {
      type : Sequelize.STRING
    },
    DateOfBirth : {
      type : Sequelize.DATE
    } ,
    Password : {
      type : Sequelize.STRING
    },
    Email : {
      type : Sequelize.STRING
    } ,
    Gender : {
      type : Sequelize.STRING
    },
    Picture : {
      type : Sequelize.STRING
    },
    PhoneNumber : {
      type : Sequelize.STRING
    }
  });
  return Person;
};

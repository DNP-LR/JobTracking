module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define("Person", {
      FirstName: {
        type: Sequelize.STRING
      },
      LastName : {
        type: Sequelize.STRING
      },
      DateOfBirth : {
        type:Sequelize.STRING
      } ,
      Password : {
        type:Sequelize.STRING
      },
      Email : {
        type:Sequelize.BOOLEAN
      } ,
      Gender : {
        type:Sequelize.BOOLEAN
      },
      Picture : {
        type:Sequelize.BOOLEAN
      },
      PhoneNumber : {
        type:Sequelize.BOOLEAN
      }
    },
  );
  const JobSeeker = sequelize.define("JobSeeker", {
        PhoneNumber : {
        type:Sequelize.BOOLEAN
      }
    },
  );
  return JobSeeker;

  return Blockchain;
};

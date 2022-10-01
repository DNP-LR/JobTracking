module.exports = (sequelize, Sequelize) => {
  const Recruiter = sequelize.define("Recruiter", {
      CommercialRegister : {
        type:Sequelize.STRING
      },
      Longitude : {
        type:Sequelize.STRING
      },
      Latitude : {
        type:Sequelize.STRING
      },
      Region : {
        type:Sequelize.STRING
      },
      Town : {
        type:Sequelize.STRING
      },
      Logo : {
        type:Sequelize.STRING
      }
    }
  );
  return Recruiter;
};

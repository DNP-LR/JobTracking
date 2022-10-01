module.exports = (sequelize, Sequelize) => {
  const Education = sequelize.define("Education", {
      EduName: {
        type: Sequelize.STRING
      },
      EduType: {
        type: Sequelize.STRING
      },
      Grade: {
        type: Sequelize.STRING
      },
      Degree: {
        type: Sequelize.STRING
      },
      Major: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      Town: {
        type: Sequelize.STRING
      },
      StartDate: {
        type: Sequelize.STRING
      },
      EndDate: {
        type: Sequelize.STRING
      }
    });
  return Education;
};

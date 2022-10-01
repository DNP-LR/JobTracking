module.exports = (sequelize, Sequelize) => {
  const JobSeeker = sequelize.define("JobSeeker", {
      PhoneNumber : {
        type:Sequelize.BOOLEAN
      }
    },
  );
  const CV = sequelize.define("CV", {
      PhoneNumber : {
        type:Sequelize.BOOLEAN
      }
    },
  );

  const Job = sequelize.define("Job", {
      Name : {
        type:Sequelize.BOOLEAN
      },
      Description : {
        type:Sequelize.BOOLEAN
      },
      Salary : {
        type:Sequelize.BOOLEAN
      },
      Description : {
        type:Sequelize.BOOLEAN
      },
      Duration : {
        type:Sequelize.BOOLEAN
      },
      City : {
        type:Sequelize.BOOLEAN
      },
      CityType : {
        type:Sequelize.BOOLEAN
      },
      StartDate : {
        type:Sequelize.BOOLEAN
      },
      EndDate : {
        type:Sequelize.BOOLEAN
      }
    },
  );
  const Certification = sequelize.define("Certification", {
      CertName : {
        type:Sequelize.BOOLEAN
      },
      CompanyName : {
        type:Sequelize.BOOLEAN
      },
      StartDate : {
        type:Sequelize.BOOLEAN
      },
      EndDate : {
        type:Sequelize.BOOLEAN
      }
    },
  );
  const Experience = sequelize.define("Experience", {
      EXName : {
        type:Sequelize.BOOLEAN
      },
      Designation : {
        type:Sequelize.BOOLEAN
      },
      CompanyNum : {
        type:Sequelize.BOOLEAN
      },
      Location : {
        type:Sequelize.BOOLEAN
      },
      StartDate : {
        type:Sequelize.BOOLEAN
      },
      EndDate : {
        type:Sequelize.BOOLEAN
      }
    },
  );
  return JobSeeker;
  return Certification;
  return CV;
  return Education;
  return Experience;
  return Job;
};

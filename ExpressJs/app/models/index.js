const dbConfig = require ("../config/db.config.js");
const Sequelize = require ("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host : dbConfig.HOST,
  dialect : dbConfig.dialect,
  operationAliases: false,
  pool : {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {} ;
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.blockchain = require("./blockchain.model.js")(sequelize, Sequelize);
db.person = require("./person.model.js")(sequelize, Sequelize);
db.recruiter = require("./recruiter.model")(sequelize, Sequelize);
db.education = require("./education.model")(sequelize, Sequelize);

module.exports = db;

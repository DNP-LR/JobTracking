module.exports= (sequelize, Sequelize) =>{
  const Role = sequelize.define("roles", {
    id:{
      type: Sequelize.INTEGER,
      primaryKeys: true
    },
    name : {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Role;
}

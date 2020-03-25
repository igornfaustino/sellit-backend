'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      whatsapp: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Item, { foreignKey: 'userID' });
  };
  return User;
};

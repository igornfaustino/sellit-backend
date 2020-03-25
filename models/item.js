'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      value: DataTypes.DECIMAL,
      userId: DataTypes.INTEGER
    },
    {}
  );
  Item.associate = function(models) {
    Item.belongsTo(models.User, { as: 'User', foreignKey: 'userId' });
  };
  return Item;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var decks = sequelize.define('decks', {
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    format: DataTypes.STRING,
    description: DataTypes.String,
    colors: DataTypes.ARRAY(Sequelize.TEXT)
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
  return decks;
};

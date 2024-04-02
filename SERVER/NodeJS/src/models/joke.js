"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Joke extends Model {
    static associate(models) {
      // Define association here
    }
  }
  Joke.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dislikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Joke",
    }
  );
  return Joke;
};

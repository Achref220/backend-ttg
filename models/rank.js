"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rank.init(
    {
      name: DataTypes.STRING,
      rank_img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rank",
    }
  );
  return Rank;
};

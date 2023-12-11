'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {foreignKey: "User_id"})
    }
  }
  Post.init({
    Uuid: DataTypes.STRING,
    User_id: DataTypes.INTEGER,
    Title: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
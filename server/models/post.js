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
    Uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "uuid cannot be empty"
        },
        notEmpty: {
          msg: "uuid cannot be empty"
        }
      }
    },
    User_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "user id cannot be empty"
        },
        notEmpty: {
          msg: "user id cannot be empty"
        }
      }
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "title cannot be empty"
        },
        notEmpty: {
          msg: "title cannot be empty"
        }
      }
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "description cannot be empty"
        },
        notEmpty: {
          msg: "description cannot be empty"
        }
      }
    },
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
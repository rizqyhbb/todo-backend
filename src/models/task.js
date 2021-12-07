'use strict';
const {
  Model, UUID, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(User)
    }
  };
  Task.init({
    id_task: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    id_user: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {model: 'user', key: 'id_user'}
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'task',
    freezeTableName: true,
    underscored: true,
    timestamps: false,S
  });
  return Task;
};
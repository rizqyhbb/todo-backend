'use strict';
const {
  Model, UUIDV4
} = require('sequelize'); 
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      const User = sequelize.define('user');
      const Task = sequelize.define('task')
      Task.belongsTo(User, {as: 'user'});
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
    timestamps: false,
  });
  return Task;
};
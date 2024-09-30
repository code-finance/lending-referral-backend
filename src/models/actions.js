module.exports = (sequelize, Sequelize) => {
  const Actions = sequelize.define('actions', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });

  return Actions;
};

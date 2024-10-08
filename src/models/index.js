'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//     .readdirSync(__dirname)
//     .filter(file => {
//         return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     })
//     .forEach(file => {
//         const model = sequelize['import'](path.join(__dirname, file));
//         db[model.name] = model;
//     });
//
// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//         db[modelName].associate(db);
//     }
// });

sequelize.logging = console;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.referrals = require('./referrals')(sequelize, Sequelize);
db.points = require('./points')(sequelize, Sequelize);
db.actions = require('./actions')(sequelize, Sequelize);

db.points.belongsTo(db.actions, {foreignKey: {name: 'actionId'}});
db.referrals.hasMany(db.points, {foreignKey: {name: 'wallet'}});
module.exports = db;

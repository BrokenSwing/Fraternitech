import {Sequelize} from 'sequelize-typescript';
import User from './user';

function initialize() {
  const sequelize = new Sequelize({
    models: [User],
    dialect: 'sqlite',
    storage: 'dev.sqlite',
  });
  return sequelize.authenticate()
    .then(() => console.log('Connected to database'))
    .then(() => sequelize.sync({ alter: true }))
    .catch((err) => console.error(err));
}

export default {initialize, User};
export { User };

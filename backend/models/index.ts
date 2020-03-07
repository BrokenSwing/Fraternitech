import {Sequelize} from 'sequelize-typescript';
import User from './user';
import BabyImage from './baby-image';
import BabyAnswer from './baby-answer';
import {images} from './data';

function initialize() {

  const models = [User, BabyImage, BabyAnswer];

  const sequelize = (() => {
    if (process.env.NODE_ENV === 'production') {
      // tslint:disable-next-line:max-line-length
      return new Sequelize(process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_COPPER_URL, {
        ssl: true,
        native: true,
        models,
      });
    }

    return new Sequelize({
      models,
      dialect: 'sqlite',
      storage: 'dev.sqlite',
    });
  })();

  return sequelize.authenticate()
    .then(() => console.log('Connected to database'))
    .then(() => sequelize.sync({ alter: true }))
    .then(() => BabyImage.truncate())
    .then(() => BabyImage.bulkCreate(images) )
    .catch((err) => console.error(err));
}

export default {initialize, User, BabyAnswer, BabyImage};
export { User, BabyAnswer, BabyImage };

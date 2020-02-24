import {Sequelize} from 'sequelize-typescript';
import User from './user';
import BabyImage from './baby-image';
import BabyAnswer from './baby-answer';

function initialize() {

  const models = [User, BabyImage, BabyAnswer];

  const sequelize = (() => {
    if (process.env.NODE_ENV === 'production') {
      // tslint:disable-next-line:max-line-length
      return new Sequelize('postgres://nhoaxhodqgkzkz:e845d362d6ba346e90c3f2abf3f28f2df877d98d530255f3297ab85e9009cb1c@ec2-54-246-89-234.eu-west-1.compute.amazonaws.com:5432/d947ik3d5ejhrd', {
        ssl: true,
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
    .catch((err) => console.error(err));
}

export default {initialize, User, BabyAnswer, BabyImage};
export { User, BabyAnswer, BabyImage };

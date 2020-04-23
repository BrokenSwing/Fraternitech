import * as cron from 'node-cron';
import BabyAnswer from '../models/baby-answer';
import BabyImage from '../models/baby-image';
import {Op} from 'sequelize';
import User from '../models/user';

export function startCron() {
  cron.schedule('5 0 16 * * *', cronTask, {
    timezone: 'Europe/Paris',
  });
}

function cronTask() {
  fetchAllCorrectAnswers().then((answers) => {

    const ids = answers.map((answer) => answer.userId);
    const countedId: CountedIds = count(ids);
    const promises = ids.map((id) => mapUserIdToUpdatePromise(id, countedId[id]));
    return Promise.all(promises);

  })
  .then(() => setAllSubmitted())
  .catch((e) => {
    console.log(e);
  });
}

function fetchAllCorrectAnswers() {
  return BabyAnswer.findAll({
    include: [BabyImage],
    where: {
      submitted: false,
      answer: {
        [Op.col]: 'image.name'
      }
    }
  });
}

function updateUserScore(user: User, toAdd: number) {
  return User.update({
    score: user.score + toAdd,
  }, {
    where: {
      userId: user.userId,
    }
  });
}

function mapUserIdToUpdatePromise(id: string, toAdd: number) {
  return User.findByPk(id).then(user => updateUserScore(user, toAdd));
}

function count(ids: string[]) {
  return ids.reduce<CountedIds>((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = 0;
    }
    acc[curr] += 1;
    return acc;
  }, {});
}

function setAllSubmitted() {
  return BabyAnswer.update({
    submitted: true,
  }, {
    where: {}
  });
}

interface CountedIds {
  [userId: string]: number;
}




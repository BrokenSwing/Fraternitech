import BabyImage from '../models/baby-image';
import BabyAnswer from '../models/baby-answer';
import User from '../models/user';

function submitAnswerFor(img: BabyImage, answer: string, userId: string) {
  return Promise.all([
    BabyAnswer.upsert({
      userId,
      hash: img.hash,
      answer,
      submitted: false,
    }),
    User.update({
      lastScoreUpdate: new Date(),
    }, {
      where: {
        userId,
      }
    })
  ]);
}

function listForUser(userId: string) {
  return BabyAnswer.findAll({
    where: {
      userId,
    }
  });
}

export default {submitAnswerFor, listForUser};

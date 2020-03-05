import BabyImage from '../models/baby-image';
import BabyAnswer from '../models/baby-answer';

function submitAnswerFor(img: BabyImage, answer: string, userId: string) {
  return BabyAnswer.upsert({
    userId,
    hash: img.hash,
    answer,
    submitted: false,
  });
}

export default {submitAnswerFor};

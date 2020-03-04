import { BabyImage } from '../models';
import * as moment from 'moment';

export const NOT_FOUND = new Error('Not Found');
export const FORBIDDEN = new Error('Forbidden');

function canQuery(hash: string): Promise<boolean> {
  return BabyImage.findByPk(hash).then((img) => {
    console.log(hash);
    if (img === null) {
      return Promise.reject(NOT_FOUND);
    }

    const canShow = moment(img.day).isBefore(moment());

    if (canShow) {
      return Promise.resolve(true);
    }

    return Promise.reject(FORBIDDEN);

  });
}

function getAllQueryableImages() {
  const now = moment.now();
  return BabyImage.findAll().then((images) => {
    return images.filter((img) => moment(img.day).isBefore(now)).map((img) => {
      const imgDate = moment(img.day);
      if (imgDate.add('1', 'd').isBefore(now)) {
        return {
          day: imgDate.unix(),
          hash: img.hash,
          name: img.name,
          dayNumber: img.dayNumber,
          ext: img.ext,
        };
      } else {
        return {
          day: imgDate.unix(),
          hash: img.hash,
          dayNumber: img.dayNumber,
          ext: img.ext,
        };
      }
    });
  });
}

export default { canQuery, getAllQueryableImages };

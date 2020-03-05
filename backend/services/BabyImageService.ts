import { BabyImage } from '../models';
import * as moment from 'moment';
import {Op} from 'sequelize';

export const NOT_FOUND = new Error('Not Found');
export const FORBIDDEN = new Error('Forbidden');

function canQuery(hash: string): Promise<boolean> {
  return BabyImage.findByPk(hash).then((img) => {
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
  return Promise.all([
    BabyImage.findAll({
      order: ['hash'],
      where: {
        day: {
          [Op.lte]: new Date()
        }
      }
    }),
    BabyImage.findAll({
      attributes: ['name'],
      order: ['name'],
      where: {
        day: {
          [Op.gte]: moment().subtract('1', 'd').toDate()
        }
      }
    })
  ]).then((data: [BabyImage[], BabyImage[]]) => {
    const images = data[0].map((img) => {
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
    const names = data[1].map((img) => img.name);
    return {
      names,
      images,
    };
  });
}

export default { canQuery, getAllQueryableImages };

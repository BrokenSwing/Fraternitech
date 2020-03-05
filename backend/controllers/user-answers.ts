import {Request, Response} from 'express';
import babiesService, {NOT_FOUND} from '../services/BabyImageService';
import * as moment from 'moment';
import userAnswersService from '../services/user-answer-service';
import {User} from '../models';

function submitAnswer(req: Request, res: Response) {
  const b = req.body;

  if (b && b.hash && b.answer) {
    babiesService.canQuery(b.hash).then((img) => {

      const imgDateOneDayLater = moment(img.day).add(1, 'd');

      if (moment().isBefore(imgDateOneDayLater)) { // It's ok

        userAnswersService.submitAnswerFor(img, b.answer, ((req as any).user as User).userId).then(() => {

          res.status(201).send({ success: 'Answer saved.' });

        }).catch(() => {
          res.status(400).send({ error: 'Already answered.' });
        });

      } else { // Too late to submit an answer
        res.status(400).send({ error: 'It is too late to submit an answer for this image.'});
      }

    }).catch((e) => {
        if (e === NOT_FOUND) {
          res.status(400).send({ error: 'No image with given hash exists.' });
        } else {
          res.status(403).send({ error: 'You are not allowed to submit an answer for this image.'});
        }
    });
  }

}

export default { submitAnswer };

import {Request, Response} from 'express';
import scoreService from '../services/ScoresService';

function handleGet(req: Request, res: Response) {

    scoreService.getOrderedUsers().then((users) => {

      const scores = users.map((user, i) => ({
        rank: i + 1,
        name: `${user.firstname} ${user.lastname}`,
        score: user.score,
      }));

      res.send(scores);

    }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });

}

export default { handleGet };


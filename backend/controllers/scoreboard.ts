import { Request, Response } from 'express';
import scoreService from '../services/ScoresService';
import {User} from '../models';

function handleGet(req: Request, res: Response) {

  const connectedUser: User = (req as any).user as User;

  if (connectedUser.userId === '1182435415435474' || connectedUser.userId === '1685141998281438') {
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
  } else {
    res.sendStatus(403);
  }

}

export default { handleGet };


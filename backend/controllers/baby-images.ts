import { Request, Response, NextFunction } from 'express';
import babyImageService, {FORBIDDEN, NOT_FOUND} from '../services/BabyImageService';

function handleGetOne(req: Request, res: Response, next: NextFunction) {
  const hash = req.path.substr(req.path.lastIndexOf('/') + 1, req.path.lastIndexOf('.'));
  babyImageService.canQuery(hash).then(next).catch((err) => {
    if (err === NOT_FOUND) {
      res.sendStatus(404);
    } else if (err === FORBIDDEN) {
      res.sendStatus(403);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  });
}

function handleGetList(req, res) {
  babyImageService.getAllQueryableImages().then((result) => {
    res.send(result);
  });
}

export default { handleGetOne, handleGetList };

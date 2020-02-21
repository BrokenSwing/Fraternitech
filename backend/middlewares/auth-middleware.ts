import tokenService from '../services/TokenService';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models';

const ensureConnected = (checkAdmin = false) => (req: Request, res: Response, next: NextFunction) => {
  const headerValue = req.header('Authorization');
  if (headerValue.startsWith('Bearer ')) {
    const token = headerValue.substr(7);
    tokenService.checkToken(token).then((value) => {
      if (typeof value === 'object') {
        const userId = (value as any).userId;
        User.findByPk(userId).then((user) => {
          if (user === null) {
            res.sendStatus(401);
          } else if (!checkAdmin || user.isAdmin) {
            (req as any).user = user;
            next();
          } else {
            res.sendStatus(403);
          }
        }).catch((err) => {
          console.log(err);
          res.sendStatus(500);
        });
      } else {
        console.error('Obtained string token once decoded ??!');
        res.sendStatus(400); // ??? Shouldn't be a string
      }
    }).catch(() => {
      res.sendStatus(401);
    });
  } else {
    res.sendStatus(401);
  }
};

export default {ensureConnected};

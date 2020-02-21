import {Request, Response} from 'express';
import fb from '../fb';
import { User } from '../models';
import tokenService from '../services/TokenService';

function handleGet(req: Request, res: Response) {

  const token = req.query.token;

  if (token === undefined || token.length === 0) {
    return res.status(400).send({
      error: 'Unspecified token'
    });
  }

  fb.debugToken(token).then((response) => {

    // Check if given token is still valid
    if (response.status === 200 && response.data.data.is_valid) {

      const userId = response.data.data.user_id;
      fb.userInfo(userId).then((r) => {

        if (r.status === 200) {
          // We can log in user

          User.findOrCreate({
            where: {
              userId,
            },
            defaults: {
              firstname: r.data.first_name,
              lastname: r.data.last_name,
              isAdmin: false,
            }
          }).then((result) => {

            const user = result[0];

            const signedToken = tokenService.queryToken(user);

            return res.send({
              token: signedToken,
            });

          }).catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });

        } else {
          res.status(400).send({
            error: 'Invalid token',
          });
        }
      }).catch((err) => {
        console.error(err);
        res.sendStatus(502);
      });
    } else {
      res.status(400).send({
        error: 'Invalid token',
      });
    }

  }).catch((err) => {
      console.error(err);
      res.sendStatus(502);
  });
}

export default {handleGet};


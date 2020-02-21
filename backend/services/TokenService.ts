import * as jwt from 'jsonwebtoken';
import {User} from '../models';

const TOKEN_SECRET_KEY = 'token_super_secret';
const TOKEN_ALG = 'HS256';

function queryToken(user: User) {
  return jwt.sign({
    userId: user.userId,
    firstName: user.firstname,
    lastName: user.lastname,
  }, TOKEN_SECRET_KEY, {
    algorithm: TOKEN_ALG,
    expiresIn: '2d'
  });
}

function checkToken(token: string): Promise<object | string> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, TOKEN_SECRET_KEY, {
      algorithms: [TOKEN_ALG],
    }, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

export default {queryToken, checkToken};

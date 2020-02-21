import {Express, Router} from 'express';
import createAccount from '../controllers/create-account';
import authMiddleware from '../middlewares/auth-middleware';
import {User} from '../models';

function setup(app: Express) {
  const router = Router();

  router.get('/account', createAccount.handleGet);
  router.get('/me', authMiddleware.ensureConnected(), (req, res) => {
    const user = (req as any).user as User;
    res.send({
      userId: user.userId,
      firstName: user.firstname,
      lastName: user.lastname,
      isAdmin: user.isAdmin,
    });
  });

  app.use('/api', router);
}

export default { setup };

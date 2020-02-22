import {Express, Router} from 'express';
import createAccount from '../controllers/create-account';
import scoreboard from '../controllers/scoreboard';

function setup(app: Express) {
  const router = Router();

  router.get('/account', createAccount.handleGet);
  router.get('/scoreboard', scoreboard.handleGet);

  app.use('/api', router);
}

export default { setup };

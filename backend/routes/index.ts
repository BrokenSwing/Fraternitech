import {Express, Router} from 'express';
import * as express from 'express';
import createAccount from '../controllers/create-account';
import scoreboard from '../controllers/scoreboard';
import babyImages from '../controllers/baby-images';
import {join} from 'path';

function setup(app: Express) {
  const router = Router();

  const BABIES_DIR = join(process.cwd(), 'static');

  router.get('/account', createAccount.handleGet);
  router.get('/scoreboard', scoreboard.handleGet);
  router.get('/babies', babyImages.handleGetList);
  router.get('/babies/*.*', babyImages.handleGetOne, express.static(BABIES_DIR, {
    fallthrough: false,
  }));

  app.use('/api', router);
}

export default { setup };

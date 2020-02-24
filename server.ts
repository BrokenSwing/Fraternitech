import 'zone.js/dist/zone-node';

import * as express from 'express';
import {join} from 'path';
import enforce from 'express-sslify';
import db from './backend/models';
import routes from './backend/routes/';

db.initialize().then(() => {
  // Express server
  const app = express();

  // Middleware
  if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({trustProtoHeader: true}));
  }

  const PORT = process.env.PORT || 4200;
  const DIST_FOLDER = join(process.cwd(), 'dist/browser');

  app.set('view engine', 'html');
  app.set('views', DIST_FOLDER);

  routes.setup(app);

  app.get('*.*|/', express.static(DIST_FOLDER, {
    maxAge: '1y'
  }));

  app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
  });

});

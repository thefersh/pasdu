import 'reflect-metadata';
import express, { Application } from 'express';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as morgan from 'morgan';
import { createConnections } from 'typeorm';
import { HOST, NODE_ENV, PORT } from './config';
import { logger } from './logs';
import { json, urlencoded } from 'body-parser';

function main(): void {
  createConnections([]).then(() => {
    const app: Application = express();
    app.enable('trust proxy');

    app.use(helmet.default());
    app.use(compression.default());
    app.use(json());
    app.use(urlencoded({ extended: false }));
    if (NODE_ENV === 'development') {
      app.use(morgan.default('dev'));
    }

    app.listen(PORT, HOST, () => logger.info(`Server Runing on port ${PORT}`));
  }).catch((e) => {
    logger.error(e);
    const appError: Application = express();
    appError.get('/', (req, res) => res.json({ err: e, msg: 'Error DB' }));
  });
}

main();

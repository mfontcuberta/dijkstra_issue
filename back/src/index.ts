/* Globals */
import 'module-alias/register';
import bodyParser from 'body-parser';
import cors from 'cors';

/* server */
import Server from './server';

/*  Routes */
import routes from './components/components.routes';
import { logger } from '@logger';

/* Middlewares */
import { logErrors, clientErrorHandler } from './middlewares/errorHandler.middleware';

/* Swagger */
import swaggerConfig from './libs/swagger-docs';

/* MongoLib */

const server = Server.instance;
server.app.use( bodyParser.urlencoded({ limit:'50mb', extended: true }) );
server.app.use( bodyParser.json({ limit:'50mb' }) );

server.app.use('/docs', swaggerConfig as any);

//CORS only available in dev
if (process.env.NODE_ENV === 'development') {
  server.app.use( cors({ origin: true, credentials: true }) );
}

// routes
server.app.use('/status', (req, res, next) => res.status(200).send({ status: 'ok' }) );
server.app.use('/', routes());

server.app.use(logErrors);
server.app.use(clientErrorHandler);

server.listen( () => logger.info(`server running on http://localhost:${process.env.PORT}`) );

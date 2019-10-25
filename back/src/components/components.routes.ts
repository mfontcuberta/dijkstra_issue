/* Globals */
import { Router } from 'express';

/* Middlewares */
import { parserResponseMiddleware, loggerMiddleware } from '../middlewares/logger.middleware';

/* Routes */
import shortestPathRouter from './shortestPath/shortestPath.routes';

const componentsRouter: Router = Router();

export default () => {
  componentsRouter.use(loggerMiddleware);

  componentsRouter.use('/shortestPath', shortestPathRouter());
  
  componentsRouter.use(parserResponseMiddleware);
  return componentsRouter;
}

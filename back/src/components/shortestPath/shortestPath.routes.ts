/* Globals */
import { Router } from 'express';

/* Controller */
import * as shortestPathControllers from './shortestPath.controllers';

const shortestPathRouter: Router = Router();

export default () => {
  
  shortestPathRouter.post('/', shortestPathControllers.shortestPathController);

  return shortestPathRouter;
}

/* Globals */
import { Request, NextFunction } from 'express';
import { badRequest, notFound } from 'boom';

/* Interfaces */
import { ICustomResponse } from '../../interfaces/IcustomResponse.interface';

/* Services */
import * as shortestPathServices from './shortestPath.service';

export const shortestPathController = async (req: Request, res: ICustomResponse, next: NextFunction): Promise<void> => {
  try {
    const { body } = req;
    
    if (!body || Object.entries(body).length === 0 && body.constructor === Object) {
      throw 'Not parameters sended';
    }

    res.body = await shortestPathServices.shortestPathService( body );
    next();
  } catch (error) {
    next( badRequest(error) );
  }
}


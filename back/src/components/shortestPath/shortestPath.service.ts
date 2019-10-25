/* Globals */
import { badImplementation } from 'boom';

/* Models */
import { VectorModel } from '../../models/vector.model';

/* Classes */
import { ShortestPaths } from './shortestPath.class';


export const shortestPathService = async ( body: { grid: [][], startPosition: VectorModel } ): Promise<any>  => {
  try {
    
    return new ShortestPaths(body.grid, body.startPosition).setResult();
    
  } catch (error) {
    throw badImplementation(error);
  }
}

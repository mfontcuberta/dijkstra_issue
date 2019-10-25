import { VectorModel } from './vector.model';

export class ShortestPathModel {
    public grid: number[][];
    public startPosition: VectorModel;

    constructor(grid: number[][], startPosition: VectorModel) {
        this.grid = grid,
        this.startPosition = startPosition
    }
}
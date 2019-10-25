/* Models */
import { VectorModel } from 'src/models/vector.model';

export class ShortestPaths {

  public grid: number[][] = [];

  public gridStuff: number[][] = [];

  public currentPosition = null;

  public copiesOfVectors: VectorModel[] = [];

  public vectorPossibilities: VectorModel[] = [];

  public result: VectorModel[][] = [];

  constructor(
    grid: number[][], 
    startPosition: VectorModel
  ) {
    this.grid = grid;
    this.vectorPossibilities.push(startPosition);
    this.setGridStuff();
  }

  setResult() {

    const result = [this.vectorPossibilities];

    do {
      
      this.copiesOfVectors = this.vectorPossibilities;

      this.vectorPossibilities = [];

      this.copiesOfVectors.forEach(position => {

        this.setVectorDirections(position);        

      });
      
      result.push(...[this.vectorPossibilities]);

      if(!this.vectorPossibilities.length)
        result.pop();

    } while (this.vectorPossibilities.length)

    return result;

  }

  setVectorDirections(position: VectorModel) {

    const canUp = this.canUp(position);
    const canDown = this.canDown(position)
    const canLeft = this.canLeft(position)
    const canRight = this.canRight(position)
    
    if(canUp || canDown || canLeft || canRight){

      this.gridStuff[position.positionY][position.positionX] = 0;

      if(canUp){
        this.vectorPossibilities.push(this.up(position));
      }
      if(canDown){
        this.vectorPossibilities.push(this.down(position));
      }
      if(canLeft){
        this.vectorPossibilities.push(this.left(position));
      }
      if(canRight){
        this.vectorPossibilities.push(this.right(position));
      }

    }

  }

  setGridStuff() {

    this.grid.forEach(column => {

      const rows: number[] = [];
      column.forEach(row => {
        rows.push(row);
      });
      
      this.gridStuff.push(rows);
      
    });

  }

  canUp(position: VectorModel): boolean {
    return this.grid[position.positionY - 1][position.positionX] > 0 && this.gridStuff[position.positionY - 1][position.positionX] > 0;
  }

  up(position: VectorModel) {
    return { positionY: position.positionY - 1, positionX: position.positionX };
  }

  canDown(position: VectorModel): boolean {
    return this.grid[position.positionY + 1][position.positionX] > 0 && this.gridStuff[position.positionY + 1][position.positionX] > 0;
  }

  down(position: VectorModel) {
    return { positionY: position.positionY + 1, positionX: position.positionX };
  }

  canLeft(position: VectorModel): boolean {
    return this.grid[position.positionY][position.positionX - 1] > 0 && this.gridStuff[position.positionY][position.positionX - 1] > 0;
  }

  left(position: VectorModel) {
    return  { positionY: position.positionY, positionX: position.positionX - 1 };
  }

  canRight(position: VectorModel): boolean {
    return this.grid[position.positionY][position.positionX + 1] > 0 && this.gridStuff[position.positionY][position.positionX + 1] > 0;
  }

  right(position: VectorModel) {
    return  { positionY: position.positionY, positionX: position.positionX + 1 };
  }
}

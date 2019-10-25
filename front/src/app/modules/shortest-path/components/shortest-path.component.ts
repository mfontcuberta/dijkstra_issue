import { Component, OnInit } from '@angular/core';

/* Models */
import { VectorModel } from 'src/app/models/vector.model';
import { ShortestPathService } from '../services/shortest-path.service';
import { ShortestPathModel } from 'src/app/models/shortest-path.model';

@Component({
  selector: 'app-shortest-path',
  templateUrl: './shortest-path.component.html',
  styleUrls: ['./shortest-path.component.scss']
})
export class ShortestPathComponent implements OnInit {

  public grid: number[][] = [
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , -1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 0 ],
    [ 0 , 1 , 1 , 1 , 0 , 1 , 0 , 0 , 1 , 0 ],
    [ 0 , 0 , 0 , 1 , 0 , 1 , 1 , 1 , 1 , 0 ],
    [ 0 , 1 , 1 , 1 , 1 , 1 , 0 , 0 , 1 , 0 ],
    [ 0 , 1 , 0 , 0 , 0 , 1 , 0 , 1 , 1 , 0 ],
    [ 0 , 1 , 1 , 0 , 0 , 1 , 0 , 0 , 1 , 0 ],
    [ 0 , 0 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 0 ],
    [ 0 , 1 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]
  ]; 

  public startPosition: VectorModel = { 
    positionY: 1, 
    positionX: 1
  };

  public result: VectorModel[][] = [];

  private solution: boolean = false;

  constructor(
    private _shortestPathService: ShortestPathService
  ) { }


  ngOnInit() {

  }

  public getSolution(){

    this._shortestPathService.setShortestPath(new ShortestPathModel(this.grid, this.startPosition)).subscribe(
      async (shortestPath: [][]) => { 
        this.result = shortestPath;
        this.setVectorNumber(this.result);
      }
    );

  }

  private setVectorNumber(result): void {
    
    this.grid.forEach((row, rowIndex) => {

      row.forEach((item, itemIndex) => {

        result.forEach((vectors: VectorModel[], vectorIndex) => {

          const vector = vectors.find(vector => vector.positionX == itemIndex && vector.positionY == rowIndex);

          if(vector){
            
            this.grid[rowIndex][itemIndex] = vectorIndex !== 0 ? vectorIndex : -1;

            return;

          }

        });

      });

    });

    this.solution = true;

  }
  
  public getVectorToPaint(item: number): string {
    return ((item == 1 && !this.solution) ? '' : 
    (item == -1 && !this.solution) ? 'X' : 
    (item == -1 && this.solution) ? 'X' : 
    (item > 0 && this.solution) ? item : 
    '').toString();
  }
  
}

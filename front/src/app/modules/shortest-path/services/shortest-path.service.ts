import { Injectable } from '@angular/core';

/* Rxjs */
import { Observable } from 'rxjs';

/* Services */
import { ApiShortestPathService } from '../../../api/shortest-path/shortest-path.service';

/* Models */
import { ShortestPathModel } from '../../../models/shortest-path.model';


@Injectable({
  providedIn: 'root'
})
export class ShortestPathService {

  constructor(
    private _apiShortestPathService: ApiShortestPathService
  ) { }

  public setShortestPath(shortestPath: ShortestPathModel): Observable<[][]> {
    return this._apiShortestPathService.setShortestPath(shortestPath);
  }
  
}

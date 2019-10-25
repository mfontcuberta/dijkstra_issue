/* Globals */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/* Services */
import { AppConfigService } from '../../shared-services/app-config/app-config.service';

/* Models */
import { ShortestPathModel } from '../../models/shortest-path.model';

/* Constants */
import { URL_SHORTEST_PATH } from '../constants/http-urls.constant';

/* Rxjs */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiShortestPathService {

  constructor(
    private _http: HttpClient,
    private _configService: AppConfigService
  ) { }

  public setShortestPath(shortestPath: ShortestPathModel): Observable<any> {
    return this._http
      .post(`${this._configService.getConfig().httpBaseUrlBack}${URL_SHORTEST_PATH}`, shortestPath);
  }

}

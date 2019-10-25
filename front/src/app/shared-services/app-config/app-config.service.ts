import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Models */
import { AppConfigModel } from './models/app-config.model';

@Injectable()
export class AppConfigService {
  private _appConfig: AppConfigModel;

  constructor(
    private _http: HttpClient
  ) { }

  public loadAppConfig(path: string = null): Promise<void> {
    return this._http.get( (path) ? path : '/assets/data/appConfig.json' )
      .toPromise()
      .then((data: AppConfigModel) => {
        this._appConfig = data;
      });
  }

  public getConfig(): AppConfigModel {
    return this._appConfig;
  }

}

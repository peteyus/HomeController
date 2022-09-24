import { Injectable } from '@angular/core';
import { ServiceConfig } from '../models/serviceconfig';
import { EnvConfigurationService, Configuration } from './envconfigurationservice.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceControllerService {
  private _config!: Configuration

  constructor(configService: EnvConfigurationService) {
    configService.load().subscribe(config => { this._config = config; this.someMethod(); })
  }

  someMethod() {
    this._config.services.forEach(config => { 
      switch (config.type) {
        case "legolights":
          console.log("found a lego service.");
          break;
        default:
          console.log(`Unknown service detected ${config.type}`);
      }
    })
  }
}

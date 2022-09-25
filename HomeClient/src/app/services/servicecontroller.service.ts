import { Injectable, OnInit } from '@angular/core';
import { ServiceConfig } from '../models/serviceconfig';
import { EnvConfigurationService, Configuration } from './envconfigurationservice.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceControllerService {
  private _config!: Configuration
  services!: ServiceConfig[];

  constructor(private configService: EnvConfigurationService) {
    this.configService.load().subscribe(config => { this._config = config; this.services = this.buildServices(); })
  }

  buildServices(): ServiceConfig[] {
    let components = new Array<ServiceConfig>();

    this._config.services.forEach(config => { 
      switch (config.type) {
        case "legolights":
          console.log("found a lego service.");
          components.push(config)
          break;
        default:
          console.log(`Unknown service detected ${config.type}`);
      }
    })

    return components;
  }
}

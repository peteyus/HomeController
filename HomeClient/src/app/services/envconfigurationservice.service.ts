import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ServiceConfig } from '../models/serviceconfig';

export interface Configuration {
  services: Array<ServiceConfig>
}

@Injectable({ providedIn: 'root' })
export class EnvConfigurationService {
  private readonly configUrl = 'assets/config/config.json';
  private configuration$!: Observable<Configuration>;

  constructor(private http: HttpClient) { }

  public load(): Observable<Configuration> {
    if (!this.configuration$) {
      this.configuration$ = this.http
        .get<Configuration>(`${this.configUrl}`)
        .pipe(shareReplay(1));
    }
    return this.configuration$;
  }
}

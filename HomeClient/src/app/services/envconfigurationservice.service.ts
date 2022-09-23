import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http'

export enum Environment {
  Prod = 'prod',
  Staging = 'staging',
  Test = 'test',
  Dev = 'dev',
  Local = 'local',
}

interface Configuration {
  apiUrl: string;
  stage: Environment;
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

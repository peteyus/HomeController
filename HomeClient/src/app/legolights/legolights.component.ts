import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { ServiceComponent } from '../interfaces/servicecomponent';
import { ServiceConfig } from '../models/serviceconfig';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-legolights',
  templateUrl: './legolights.component.html',
  styleUrls: ['./legolights.component.css']
})
export class LegoLightsComponent implements OnInit, ServiceComponent {
  name: string = "Lego Lights";
  description: string = "Controls the state of the lego lights running on the raspberry pi."
  isOn!: boolean
  activate(): boolean {
    throw new Error("Method not implemented.");
  }
  deactivate(): boolean {
    throw new Error("Method not implemented.");
  }
  @Input() configuration!: ServiceConfig;

  constructor(private http: HttpClient) {
  }

  setStatus() {
    this.callApi('state', 'get').subscribe(data => {
      this.isOn = data.startsWith('on');
    });
  }

  callApi(endpoint: string, method: string): Observable<string> {
    let req: Observable<string>;
    let returnData!: string;
    if (!this.configuration) {
      console.log("No configuration provided.");
      throw new Error("Configuration not received by component before HTTP call.");
    }
    switch (method) {
      case 'get':
        req = this.http.get(this.configuration.baseUrl + endpoint, { responseType: 'text' })
          .pipe(catchError(this.handleError<string>('get' + endpoint, '')));
        break;
      case 'post':
        req = this.http.post<string>(this.configuration.baseUrl + endpoint, { responseType: 'text' })
          .pipe(catchError(this.handleError<string>('post' + endpoint, '')));
        break;
      default:
        throw new Error(`Unknown HTTP method ${method}`)
    }
    return req;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  
  ngOnInit(): void {
    this.setStatus();
  }

}

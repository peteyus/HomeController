import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { ServiceComponent } from '../interfaces/servicecomponent';
import { ServiceConfig } from '../models/serviceconfig';
import { catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-legolights',
  templateUrl: './legolights.component.html',
  styleUrls: ['./legolights.component.css']
})
export class LegoLightsComponent implements OnInit, ServiceComponent {
  name: string = "Lego Lights";
  description: string = "Controls the state of the lego lights running on the raspberry pi."
  isOn: boolean = false;
  isLoading: boolean = false;
  activate() {
    //console.log('turning on lights');
    this.isLoading = true;
    this.callApi('on', 'post').subscribe(data => {
      this.getStatus();
    })
  }
  deactivate() {
    //console.log('turning off lights');
    this.isLoading = true;
    this.callApi('off', 'post').subscribe(data => {
      this.getStatus();
    })
  }
  @Input() configuration!: ServiceConfig;

  constructor(private http: HttpClient) {
  }

  getStatus() {
    //console.log('getting current status');
    this.isLoading = true;
    this.callApi('state', 'get').subscribe(data => {
      this.isOn = data.startsWith('on');
      //console.log(`lights are ${this.isOn ? 'on' : 'off'}`)
      this.isLoading = false;
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

  toggleActivation() {
    switch (this.isOn) {
      case true:
        this.deactivate();
        break;
      default:
        this.activate();
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  
  ngOnInit(): void {
    this.getStatus();
    setInterval(() => {
      this.getStatus();
    }, 20000);
  }

}

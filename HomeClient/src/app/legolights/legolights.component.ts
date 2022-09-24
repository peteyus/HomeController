import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-legolights',
  templateUrl: './legolights.component.html',
  styleUrls: ['./legolights.component.css']
})
export class LegolightsComponent implements OnInit {
  name: string = "Lego Lights";
  description: string = "Controls the state of the lego lights running on the raspberry pi."
  isOn: boolean = this.getStatus();
  activate(): boolean {
    throw new Error("Method not implemented.");
  }
  deactivate(): boolean {
    throw new Error("Method not implemented.");
  }

  private _baseUrl: URL;

  constructor(baseUrl: URL, private http: HttpClient) {
    this._baseUrl = baseUrl;
  }

  getStatus(): boolean {
    return false;
  }

  /*
  callApi(endpoint: string, method: string): string {
    let req: Observable<string>;
    switch (method) {
      case 'get':
        req = this.http.get(this._baseUrl + '/' + endpoint, { responseType: 'text' });
        break;
      case 'post':
        req = this.http.post(this._baseUrl + '/' + endpoint, { responseType: 'text' });
    }
  }
  */

  ngOnInit(): void {
  }

}

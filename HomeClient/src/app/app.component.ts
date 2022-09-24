import { Component } from '@angular/core';
import { ServiceControllerService } from './services/servicecontroller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeClient';
  private _servicesController: ServiceControllerService

  constructor(servicesController: ServiceControllerService) {
    this._servicesController = servicesController;
  }

  ngOnInit() {
  }
}

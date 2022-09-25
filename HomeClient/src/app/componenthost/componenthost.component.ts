import { Component, OnInit } from '@angular/core';
import { ServiceConfig } from '../models/serviceconfig';
import { ServiceControllerService } from '../services/servicecontroller.service';

@Component({
  selector: 'app-componenthost',
  templateUrl: './componenthost.component.html',
  styleUrls: ['./componenthost.component.css']
})
export class ComponentHostComponent implements OnInit {
  services: ServiceConfig[] = [];

  constructor(private servicesController: ServiceControllerService) {
}

  ngOnInit(): void {
    this.services = this.servicesController.services;
  }

}

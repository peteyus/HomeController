import { SmartService } from "../interfaces/smartservice";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// TODO: Configuration
export class LegoLightService implements SmartService {
  name: string = "Lego Lights";
  description: string = "Controls the state of the lego lights running on the raspberry pi."
  isOn: boolean = this.getStatus();
    activate(): boolean {
        throw new Error("Method not implemented.");
    }
    deactivate(): boolean {
        throw new Error("Method not implemented.");
    }

  getStatus():boolean {
    return false;
  }
}

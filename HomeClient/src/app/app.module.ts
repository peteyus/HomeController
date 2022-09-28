import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { EnvConfigurationService } from './services/envconfigurationservice.service';
import { LegoLightsComponent } from './legolights/legolights.component';
import { ComponentHostComponent } from './componenthost/componenthost.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LegoLightsComponent,
    ComponentHostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (envConfigService: EnvConfigurationService) => () => envConfigService.load().toPromise(),
    deps: [EnvConfigurationService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

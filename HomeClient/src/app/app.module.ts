import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnvConfigurationService } from './services/envconfigurationservice.service';
import { LegolightsComponent } from './legolights/legolights.component';

@NgModule({
  declarations: [
    AppComponent,
    LegolightsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
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

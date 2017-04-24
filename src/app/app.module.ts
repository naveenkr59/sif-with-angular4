import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { Angular2TokenService} from 'angular2-token';
import { SharedModule }         from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PlatformModule } from './platform/platform.module';
import { AuthLinksComponent } from './authentication/auth-links.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AboutComponent } from './marketing/about/about.component';
import { CargopantherComponent } from './marketing/products/cargopanther/cargopanther.component';
import { DeliverystoneComponent } from './marketing/products/deliverystone/deliverystone.component';
import { ReverseblueComponent } from './marketing/products/reverseblue/reverseblue.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLinksComponent,
    MarketingComponent,
    AboutComponent,
    CargopantherComponent,
    DeliverystoneComponent,
    ReverseblueComponent,
    UserComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,
    PlatformModule
  ],
  providers: [
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
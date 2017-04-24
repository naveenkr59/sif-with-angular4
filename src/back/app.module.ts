import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2TokenService} from 'angular2-token';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AuthLinksComponent } from './authentication/auth-links.component';
import { AuthRoutingModule } from './authentication/auth-routing/auth-routing.module';
import { MarketingComponent } from './marketing/marketing.component';
import { AboutComponent } from './marketing/about/about.component';
import { CargopantherComponent } from './marketing/products/cargopanther/cargopanther.component';
import { DeliverystoneComponent } from './marketing/products/deliverystone/deliverystone.component';
import { ReverseblueComponent } from './marketing/products/reverseblue/reverseblue.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AuthLinksComponent,
    MarketingComponent,
    AboutComponent,
    CargopantherComponent,
    DeliverystoneComponent,
    ReverseblueComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
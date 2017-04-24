import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing/marketing.component';
import { AboutComponent } from './marketing/about/about.component';
import { CargopantherComponent } from './marketing/products/cargopanther/cargopanther.component';
import { DeliverystoneComponent } from './marketing/products/deliverystone/deliverystone.component';
import { ReverseblueComponent } from './marketing/products/reverseblue/reverseblue.component';
import { UserComponent } from './user/user.component';
import { LoggedInGuard } from './authentication/logged-in-guard.service';

const routes: Routes = [
  { path: '',                             component: MarketingComponent, pathMatch: 'full'},
  { path: 'about',                        component: AboutComponent},
  { path: 'cargopanther',                 component: CargopantherComponent},
  { path: 'deliverystone',                component: DeliverystoneComponent},
  { path: 'reverseblue',                  component: ReverseblueComponent},
  { path: 'user',            component: UserComponent},
  {
    path: 'profile',
    loadChildren: 'app/account/account.module#AccountModule',
    canLoad: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

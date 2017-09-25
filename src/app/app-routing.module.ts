import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing/marketing.component';
import { AboutComponent } from './marketing/about/about.component';
import { UserComponent } from './user/user.component';
import { LoggedInGuard } from './authentication/logged-in-guard.service';

const routes: Routes = [
  { path: '',                             component: MarketingComponent, pathMatch: 'full'},
  { path: 'about',                        component: AboutComponent},
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

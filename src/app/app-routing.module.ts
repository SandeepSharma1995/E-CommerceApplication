import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'home',
    component:LandingPageComponent ,
  },
  {
    path: 'shop-now',
    loadChildren: 'src/app/routes/dashboard/dashboard.module#DashboardModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { TradesComponent } from './shared/components/trades/trades.component';
import { PortfolioComponent } from './shared/components/portfolio/portfolio.component';
import { ChartsComponent } from './shared/components/charts/charts.component';

const routes: Routes = [
  {path:"" , component : LoginComponent},
  {path:"dashboard" , component : DashboardComponent},
  {path:"trades" , component : TradesComponent},
  {path:"dashboard/charts/:id" , component : ChartsComponent},
  {path:"portfolio" , component : PortfolioComponent},

  {path:"page-not-found" , component : PageNotFoundComponent},
  {path:"**" , redirectTo: "page-not-found"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

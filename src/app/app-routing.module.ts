import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AuthentificationComponent } from './modules/authentification/authentification.component';
import { IndicateursComponent } from './modules/indicateurs/indicateurs.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'hcp',pathMatch:'full'
  },
  {
    path:'authentification',component:AuthentificationComponent
  },
  {
    path:'hcp',component:DefaultComponent,
    children:[
      {
        path:'',component:StatisticsComponent
      },
      {
        path:'indicateurs',component:IndicateursComponent
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'**',component:AuthentificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

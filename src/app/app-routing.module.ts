import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './alarm-app/pages/login/login.component';
import { register } from 'node:module';
import { RegisterComponent } from './alarm-app/pages/register/register.component';
import { RegisteredComponent } from './alarm-app/pages/registered/registered.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'registered',
    component: RegisteredComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./alarm-app/alarm-app.module').then(m => m.AlarmAppModule),
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

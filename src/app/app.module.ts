import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { InitiationComponent } from './components/initiation/initiation.component';
import { TodayComponent } from './components/today/today.component';
import { PersonagesComponent } from './components/personages/personages.component';

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InitiationComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'users'
      },
      {
        path: 'users',
        component: DashboardUsersComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    PruebaComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    DashboardUsersComponent,
    InitiationComponent,
    TodayComponent,
    PersonagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas, {
      enableTracing: true,
      paramsInheritanceStrategy: 'always',
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

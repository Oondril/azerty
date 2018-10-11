import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {WelcomePageComponent} from './welcome.component';
import {LoginComponent} from './login.component';

const appRoutes: Routes = [
  { path: 'welcome-page', component: WelcomePageComponent },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

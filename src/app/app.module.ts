import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PageConnexionComponent} from './page-connexion.component';
import {LoginComponent} from './login.component';
import {ExerciceComponent} from './exercices/exercice.component';
import {ExplicationsAttaqueComponent} from './exercices/données/explications-attaque.component';
import {ExplicationsExerciceComponent} from './exercices/données/explications-exercice.component';
import {ExplicationsFonctionnementComponent} from './exercices/données/explications-fonctionnement.component';
import {ApiService} from './services/api.service';
import {ApiSshService} from './services/api-ssh.service';

const appRoutes: Routes = [
  { path: 'welcome-page', component: PageConnexionComponent },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    LoginComponent,
    ExplicationsAttaqueComponent,
    ExplicationsExerciceComponent,
    ExplicationsFonctionnementComponent,
    ExerciceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ApiService,
    ApiSshService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

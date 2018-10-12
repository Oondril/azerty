import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PageConnexionComponent} from './page-connexion.component';
import {LoginComponent} from './login.component';
import {ModeleExerciceComponent} from './exercices/modele-exercice.component';
import {ExplicationsAttaqueComponent} from './exercices/données/explications-attaque.component';
import {ExplicationsExerciceComponent} from './exercices/données/explications-exercice.component';
import {ExplicationsFonctionnementComponent} from './exercices/données/explications-fonctionnement.component';

const appRoutes: Routes = [
  { path: 'welcome-page', component: PageConnexionComponent },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    LoginComponent,
    ModeleExerciceComponent,
    ExplicationsAttaqueComponent,
    ExplicationsExerciceComponent,
    ExplicationsFonctionnementComponent
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

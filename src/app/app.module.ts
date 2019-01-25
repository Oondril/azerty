import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {ExerciceComponent} from './exercices/exercice.component';
import {ExplicationsAttaqueComponent} from './exercices/données/explications-attaque.component';
import {ExplicationsExerciceComponent} from './exercices/données/explications-exercice.component';
import {ExplicationsFonctionnementComponent} from './exercices/données/explications-fonctionnement.component';
import {ApiService} from './services/api.service';
import {ApiSshService} from './services/api-ssh.service';
import {InteractionConsoleComponent} from './exercices/données/interaction-console.component';
import {LoadingComponent} from './components/loading.component';
import {AttaqueBruteForceComponent} from './exercices/type/attaque-brute-force.component';
import {ConsoleNoobComponent} from './components/console-noob.component';
import {ChronoComponent} from './components/chrono.component';
import {QuestionChoixComponent} from './components/question-choix.component';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {IntroComponent} from './components/intro.component';
import {LoadingService} from './services/loading.service';
import {ChronoService} from './services/chrono.service';

const appRoutes: Routes = [
  { path: 'welcome-page', component: IntroComponent },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExplicationsAttaqueComponent,
    ExplicationsExerciceComponent,
    ExplicationsFonctionnementComponent,
    ExerciceComponent,
    InteractionConsoleComponent,
    AttaqueBruteForceComponent,
    LoadingComponent,
    ConsoleNoobComponent,
    ChronoComponent,
    QuestionChoixComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    ApiService,
    ApiSshService,
    DataService,
    LoadingService,
    ChronoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

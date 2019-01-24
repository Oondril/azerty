import {AppComponent} from '../app.component';
import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {ModeleScenario} from '../exercices/models/modele-scenario';
import {LoadingService} from '../services/loading.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'intro-component',
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss', '../global.scss']
})

export class IntroComponent implements OnInit {

  private scenario;
  private choixScenario = 1;

  public currentScenario;
  public isLoading;
  public showContexteScenario;

  constructor(private dataService: DataService, private loadingService : LoadingService) { }

  ngOnInit(){
    this.showContexteScenario = false;
    this.isLoading = true;
    this.dataService.getScenario();
    this.loadingService.displayLoadingSpinner(true);
    Observable.merge(
      this.dataService.scenario.map(
        res => {
          this.scenario = res;
          for(let i=0; i<this.scenario.length; i++){
            if(this.scenario[i].idScenario == this.choixScenario)
              this.currentScenario = this.scenario[i];
          }
          console.log(this.currentScenario);
        }, error => {
          console.log(error);
        }
      )
    ).skip(0).subscribe(
      res => {
        this.loadingService.displayLoadingSpinner(false);
        this.isLoading = false;
        console.log("skip")
      }
    );
  }

  suivant(){
    this.showContexteScenario = true;
  }

  commencer(){
    console.log("start");
  }

}

import {Component, OnInit} from '@angular/core';
import {LoadingService} from './services/loading.service';
import {DataService} from './services/data.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', 'global.scss']
})

export class AppComponent implements OnInit {

  public isLoading;
  public currentScenario;

  constructor(private loadingService : LoadingService, private dataService : DataService) { }

  ngOnInit(){
    this.isLoading = true;
    this.dataService.getScenario();
    Observable.merge(
      this.loadingService.loading$.map(
        res => {
          this.isLoading = res;
        }, error => {
          console.log(error);
        }
      ),
      this.dataService.scenario.map(
      res => {
          this.currentScenario = res;
        }, error => {
          console.log(error);
        }
      )
    ).skip(1).subscribe(
      res => {
        this.isLoading = false;
      })
  }

}

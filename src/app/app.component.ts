import {Component, OnInit} from '@angular/core';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', 'global.scss']
})

export class AppComponent implements OnInit {

  public isLoading;

  constructor(public loadingService : LoadingService) { }

  ngOnInit(){
    this.isLoading = true;
    this.loadingService.loading$.subscribe(
      res => {
        this.isLoading = res;
      }
    )
  }

}

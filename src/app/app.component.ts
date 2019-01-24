import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', 'global.scss']
})

export class AppComponent {

  public page = 0;

  constructor(public loadingService : LoadingService) { }

}

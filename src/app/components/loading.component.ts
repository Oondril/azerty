import {AppComponent} from '../app.component';
import {Component} from '@angular/core';

@Component({
  selector: 'loading-component',
  templateUrl: './loading.html',
  styleUrls: ['./loading.scss', '../global.scss']
})

export class LoadingComponent {

  constructor(private appComponent:AppComponent) { }

}

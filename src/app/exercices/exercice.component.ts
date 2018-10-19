import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'exercice',
  templateUrl: 'exercice.html',
  styleUrls: ['exercice.scss', '../global.scss']
})

export class ExerciceComponent /*implements OnInit*/{

  pageExercice = 0;
  plus = false;

  constructor(private apiService: ApiService){}

  /*ngOnInit(){
    this.apiService.getExercice();
  }*/

  suite() {
    this.pageExercice = this.pageExercice + 1;
    if (this.pageExercice > 2) {
      this.pageExercice = 0;
      this.plus = false;
    }
  }

}

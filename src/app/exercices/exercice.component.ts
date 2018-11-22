import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'exercice',
  templateUrl: 'exercice.html',
  styleUrls: ['exercice.scss', '../global.scss']
})

export class ExerciceComponent implements OnInit{

  pageExercice = 0;
  plus = false;
  public titreExercice = "";
  public typeExercice = "brute-force";

  //constructor(private apiService: ApiService){}

  ngOnInit(){
    this.getTypeExercice();
  }

  getTypeExercice(){
    //this.apiService.getExercice();
    if(this.typeExercice == "brute-force"){
      this.titreExercice = "BruteForce";
    }
  }

  suite() {
    this.pageExercice = this.pageExercice + 1;
    if (this.pageExercice > 2) {
      this.pageExercice = 0;
      this.plus = false;
    }
  }

}

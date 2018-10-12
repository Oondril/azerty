import {Component} from '@angular/core';

@Component({
  selector: 'exercice',
  templateUrl: './exercice.html',
  styleUrls: ['./exercice.scss', '../global.scss']
})

export class ModeleExerciceComponent {

  pageExercice = 0;
  plus = false;

  suite() {
    this.pageExercice = this.pageExercice + 1;
    if (this.pageExercice > 2) {
      this.pageExercice = 0;
      this.plus = false;
    }
  }

}

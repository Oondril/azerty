import {Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'explications-fonctionnement',
  templateUrl: './explications-fonctionnement.html',
  styleUrls: ['explications-fonctionnement.scss', '../../global.scss']
})

export class ExplicationsFonctionnementComponent {

  plus = false;

  voirPlus(){
    this.plus = !this.plus;
    let $fleche = $('#fleche');
    let $boutonPlus = $('#bouton-plus');
    $boutonPlus.toggleClass('bouton-plus-ouvert', 300);
    $fleche.toggleClass('apres-rotation', 300);
  }

}

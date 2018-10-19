import {Component, OnInit} from '@angular/core';
import {ApiSshService} from '../../services/api-ssh.service';

@Component({
  selector: 'explications-exercice',
  templateUrl: './explications-exercice.html'
})

export class ExplicationsExerciceComponent implements OnInit {

  constructor(private apiSshService: ApiSshService){}

  ngOnInit(){
    this.apiSshService.getAction();
  }

}

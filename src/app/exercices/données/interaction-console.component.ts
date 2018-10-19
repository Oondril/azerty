import {Component, OnInit} from '@angular/core';
import {ApiSshService} from '../../services/api-ssh.service';

@Component({
  selector: 'interaction-console',
  templateUrl: './interaction-console.html',
  styleUrls: ['interaction-console.scss', '../../global.scss']
})

export class InteractionConsoleComponent implements OnInit {

  public reponse: Array<string> = [];
  public commandeUtilisateur: string = "";

  constructor(private apiSshService: ApiSshService){}

  ngOnInit(){
    this.apiSshService.connectSsh('192.168.56.102', 'root', 'network');
    this.apiSshService.shellAnswer.subscribe(
      (res) => {
        this.reponse.push(res);
        console.log(res);
      }
    );
  }

  envoiCommande(){
    console.log(this.commandeUtilisateur);
    this.apiSshService.sendCommand('ls\r');
    console.log('send commande');
  }

  deconnexion(){
    this.apiSshService.disconnectSsh();
  }
}

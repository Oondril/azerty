import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiSshService} from '../../services/api-ssh.service';

@Component({
  selector: 'interaction-console',
  templateUrl: './interaction-console.html',
  styleUrls: ['interaction-console.scss', '../../global.scss']
})

export class InteractionConsoleComponent implements OnInit {
  @ViewChild('scrollableShell') private scrollableShell: ElementRef;

  public reponse: Array<string> = [];
  public commandeUtilisateur: string = '';
  private lastCommandeUtilisateur = '';

  constructor(private apiSshService: ApiSshService){}

  ngOnInit(){
    this.apiSshService.connectSsh('192.168.56.102', 'root', 'network');
    this.apiSshService.shellAnswer.subscribe(
      (res) => {
        if(res !== this.lastCommandeUtilisateur){
          this.reponse.push(res);
          console.log(res);
          this.scrollToBottomShell();
        }
      }
    );
  }

  envoiCommande(){
    this.apiSshService.sendCommand(this.commandeUtilisateur+'\r');
    this.lastCommandeUtilisateur = this.commandeUtilisateur;
    if(this.reponse[this.reponse.length - 1].slice(-2) === '] ' ){
      this.reponse[this.reponse.length - 1] += this.commandeUtilisateur;
    }
    if(this.commandeUtilisateur === 'clear'){
      this.reponse = [];
    }
    this.commandeUtilisateur = '';
  }

  scrollToBottomShell(){
    try{
      this.scrollableShell.nativeElement.scrollTop = this.scrollableShell.nativeElement.scrollHeight;
    }catch(err){}
  }

  onKeydown(event){
    this.envoiCommande();
  }

  deconnexion(){
    this.apiSshService.disconnectSsh();
    this.apiSshService.disconnectSocket();
  }
}

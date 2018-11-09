import {Component} from '@angular/core';

@Component({
  selector: 'fichier-mdp',
  templateUrl: './fichier-mdp.html',
  styleUrls: ['../../global.scss']
})

export class FichierMdpComponent {

  public listeMdp = [];
  public nouveauMdp = "";

  onKeydown(event, mdp){
    this.ajouteMdp(mdp);
  }

  ajouteMdp(mdp){
    if(this.listeMdp.length < 6){
      this.listeMdp.push(mdp);
    } else {
      console.log("erreur");
    }
  }

  supprimeMdp(i){
    this.listeMdp.splice(i, 1);
    console.log(this.listeMdp);
  }

}

export interface ExerciceResponse {
  data: {
    type: string,
    id:number,
    attributes:{
      explications_attaque:string,
      explications_exercice:string,
      explications_fonctionnement:string,
    }
  }
}


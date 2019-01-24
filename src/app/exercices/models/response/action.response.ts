/**
 * @name ActionResponse
 * @desc Response send  (url: /api/actions, authRequest)
 */

export interface ActionResponse {
  Data : {
    idAction:number,
    idScenario:number,
    idTextes:string,
    texte:string,
    texteSuivant:string,
    estUtilisee:boolean,
    aPrevention:boolean,
    aIndice:boolean
  }
}

/**
 * @name IndiceResponse
 * @desc Response send  (url: /api/indice, authRequest)
 */

export interface IndiceResponse {
  Data : {
    idIndice:number,
    idScenario: number,
    idAction:number,
    texte:string,
  }
}

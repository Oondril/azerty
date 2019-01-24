/**
 * @name TexteResponse
 * @desc Response send  (url: /api/textes, authRequest)
 */

export interface TexteResponse {
  Data : {
    idTexte:number,
    idScenario:number,
    titre:string,
    texte:string,
    branche:string
  }
}

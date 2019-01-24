/**
 * @name PreventionResponse
 * @desc Response send  (url: /api/prevention, authRequest)
 */

export interface PreventionResponse {
  Data : {
    idPrevention:number,
    idScenario: number,
    idAction:number,
    texte:string,
  }
}

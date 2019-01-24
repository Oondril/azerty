/**
 * @name ScenarioResponse
 * @desc Response send  (url: /api/scenario, authRequest)
 */

export interface ScenarioResponse {
  Data : {
    idScenario:number,
    duree:number,
    titre:string,
    contexte:string
  }
}

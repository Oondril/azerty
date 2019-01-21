export class ModeleIndice {

  private _id_indice: number;
  private _id_scenario: number;
  private _id_action: number;
  private _texte: string;

  get idIndice(): number {
    return this._id_indice;
  }

  get idScenario(): number {
    return this._id_scenario;
  }

  get idAction(): number {
    return this._id_action;
  }

  get texte(): string {
    return this._texte;
  }

  constructor(id_indice, id_scenario, id_action, texte) {
    this._id_indice = id_indice;
    this._id_scenario = id_scenario;
    this._id_action = id_action;
    this._texte = texte;
  }
}

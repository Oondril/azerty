export class ModeleIndice {

  private _idIndice: number;
  private _idScenario: number;
  private _idAction: number;
  private _texte: string;

  get idIndice(): number {
    return this._idIndice;
  }

  get idScenario(): number {
    return this._idScenario;
  }

  get idAction(): number {
    return this._idAction;
  }

  get texte(): string {
    return this._texte;
  }

  constructor(id_indice, id_scenario, id_action, texte) {
    this._idIndice = id_indice;
    this._idScenario = id_scenario;
    this._idAction = id_action;
    this._texte = texte;
  }
}

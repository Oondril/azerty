export class ModelePrevention {

  private _idPrevention: number;
  private _idScenario: number;
  private _idAction: number;
  private _texte: string;

  get idPrevention(): number {
    return this._idPrevention;
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

  constructor(id_prevention, id_scenario, id_action, texte) {
    this._idPrevention = id_prevention;
    this._idScenario = id_scenario;
    this._idAction = id_action;
    this._texte = texte;
  }
}

export class ModelePrevention {

  private _id_prevention: number;
  private _id_scenario: number;
  private _id_action: number;
  private _texte: string;

  get idPrevention(): number {
    return this._id_prevention;
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

  constructor(id_prevention, id_scenario, id_action, texte) {
    this._id_prevention = id_prevention;
    this._id_scenario = id_scenario;
    this._id_action = id_action;
    this._texte = texte;
  }
}

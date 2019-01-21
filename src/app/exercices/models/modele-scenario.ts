export class ModeleScenario {

  private _id_scenario: number;
  private _duree: number;
  private _titre: string;
  private _contexte: string;

  get idScenario(): number {
    return this._id_scenario;
  }

  get duree(): number {
    return this._duree;
  }

  get titre(): string {
    return this._titre;
  }

  get contexte(): string {
    return this._contexte;
  }

  constructor(id_scenario, duree, titre, contexte) {
    this._id_scenario = id_scenario;
    this._duree = duree;
    this._titre = titre;
    this._contexte = contexte;
  }
}

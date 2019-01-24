export class ModeleScenario {

  private _idScenario: number;
  private _duree: number;
  private _titre: string;
  private _contexte: string;

  get idScenario(): number {
    return this._idScenario;
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
    this._idScenario = id_scenario;
    this._duree = duree;
    this._titre = titre;
    this._contexte = contexte;
  }
}

export class ModeleAction {

  private _id_action: number;
  private _id_scenario: number;
  private _id_textes: string;
  private _texte: string;
  private _texte_suivant: string;
  private _est_utilisee: boolean;
  private _a_prevention: boolean;
  private _a_indice: boolean;

  get idAction(): number {
    return this._id_action;
  }

  get idScenario(): number {
    return this._id_scenario;
  }

  get idTextes(): string {
    return this._id_textes;
  }

  get texteSuivant(): string {
    return this._texte_suivant;
  }

  get estUtilisee(): boolean {
    return this._est_utilisee;
  }

  get aPrevention(): boolean {
    return this._a_prevention;
  }

  get aIndice(): boolean {
    return this._a_indice;
  }

  constructor(id_action, id_scenario, id_textes, texte, texte_suivant, est_utilisee, a_prevention, a_indice) {
    this._id_action = id_action;
    this._id_scenario = id_scenario;
    this._id_textes = id_textes;
    this._texte = texte;
    this._texte_suivant = texte_suivant;
    this._est_utilisee = est_utilisee;
    this._a_prevention = a_prevention;
    this._a_indice = a_indice;
  }
}

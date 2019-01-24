export class ModeleAction {

  private _idAction: number;
  private _idScenario: number;
  private _idTextes: string;
  private _texte: string;
  private _texteSuivant: string;
  private _estUtilisee: boolean;
  private _aPrevention: boolean;
  private _aIndice: boolean;

  get idAction(): number {
    return this._idAction;
  }

  get idScenario(): number {
    return this._idScenario;
  }

  get idTextes(): string {
    return this._idTextes;
  }

  get texte(): string {
    return this._texte;
  }

  get texteSuivant(): string {
    return this._texteSuivant;
  }

  get estUtilisee(): boolean {
    return this._estUtilisee;
  }

  get aPrevention(): boolean {
    return this._aPrevention;
  }

  get aIndice(): boolean {
    return this._aIndice;
  }

  constructor(id_action, id_scenario, id_textes, texte, texte_suivant, est_utilisee, a_prevention, a_indice) {
    this._idAction = id_action;
    this._idScenario = id_scenario;
    let tabIdTextes = id_textes.split(', ',id_textes.length-1);
    this._idTextes = tabIdTextes;
    this._texte = texte;
    this._texteSuivant = texte_suivant;
    this._estUtilisee = est_utilisee;
    this._aPrevention = a_prevention;
    this._aIndice = a_indice;
  }
}

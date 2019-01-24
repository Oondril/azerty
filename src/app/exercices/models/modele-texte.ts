export class ModeleTexte {

  private _idTexte: number;
  private _idScenario: number;
  private _titre: string;
  private _texte: string;
  private _branche: string;

  get idTexte(): number {
    return this._idTexte;
  }

  get idScenario(): number {
    return this._idScenario;
  }

  get titre(): string {
    return this._titre;
  }

  get texte(): string {
    return this._texte;
  }

  get branche(): string {
    return this._branche;
  }

  constructor(id_texte, id_scenario, titre, texte, branche) {
    this._idTexte = id_texte;
    this._idScenario = id_scenario;
    this._titre = titre;
    this._texte = texte;
    this._branche = branche;
  }
}

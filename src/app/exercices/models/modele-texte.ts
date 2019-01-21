export class ModeleTexte {

  private _id_texte: number;
  private _id_scenario: number;
  private _titre: string;
  private _texte: string;
  private _branche: string;

  get idTexte(): number {
    return this._id_texte;
  }

  get idScenario(): number {
    return this._id_scenario;
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
    this._id_texte = id_texte;
    this._id_scenario = id_scenario;
    this._titre = titre;
    this._texte = texte;
    this._branche = branche;
  }
}

export class ModeleExercice {

  private _id: number;
  private _titre: string;
  private _explicationsAttaque: string;
  private _explicationsExercice: string;
  private _explicationsFonctionnement: string;

  get id(): number {
    return this._id;
  }

  get titre(): string {
    return this._titre;
  }

  get explicationsAttaque(): string {
    return this._explicationsAttaque;
  }

  get explicationsExercice(): string {
    return this._explicationsExercice;
  }

  get explicationsFonctionnement(): string {
    return this._explicationsFonctionnement;
  }

  constructor(id: number, titre = null, explications_attaque = null, explications_exercice = null, explications_fonctionnement = null) {
    this._id = id;
    this._explicationsAttaque = explications_attaque;
    this._explicationsExercice = explications_exercice;
    this._explicationsFonctionnement = explications_fonctionnement;
  }
}

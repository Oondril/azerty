export class Timer {

  private _minutes: number = 0;
  private _secondes: number = 0;
  private _printableMinutes: string = this._minutes + '';
  private _printableSecondes: string = this._secondes + '';
  private _totalSecondes: number = 0;
  private _timer;
  get minutes(): number { return this._minutes; }
  get secondes(): number { return this._secondes; }
  get printableMinutes(): string { return this._printableMinutes; }
  get printableSecondes(): string { return this._printableSecondes; }

  start() {
    this._timer = setInterval(() => {
      if(this._totalSecondes > 0){
        this._minutes = Math.floor(--this._totalSecondes / 60);
        this._secondes = this._totalSecondes - this._minutes * 60;
        this.formatPrintableMinutes();
        this.formatPrintableSecondes();
      }
    }, 1000);
  }
  stop() {
    clearInterval(this._timer);
  }
  reset() {
    this._totalSecondes = this._minutes = this._secondes = 0;
  }

  setTime(min: number ,sec: number){
    this.setMinutes(min);
    this.setSecondes(sec);
    this.setTotalSecondes(min * 60 + sec);
  }

  setMinutes(min:number){
    this._minutes = min;
    this.formatPrintableMinutes();
  }

  setSecondes(sec:number){
    this._secondes = sec;
    this.formatPrintableSecondes();
  }

  setTotalSecondes(sec:number){
    this._totalSecondes = sec;
  }

  formatPrintableSecondes() {
    if (this._secondes >= 0 && this._secondes < 10) {
      this._printableSecondes = '0' + this._secondes;
    }else{
      this._printableSecondes = this._secondes + '';
    }
  }

  formatPrintableMinutes() {
    if (this._minutes >= 0 && this._minutes < 10) {
      this._printableMinutes = '0' + this._minutes;
    }else{
      this._printableMinutes = this._minutes + '';
    }
  }
}

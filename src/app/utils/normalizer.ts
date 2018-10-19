export class Normalizer {

  constructor() {
  }

  public static serializeHttpParams(...args: any[]): any|null {
    if (arguments.length > 0) {
      let result = this.normalizeParamName(arguments[0]);
      for (let i = 0; i < arguments.length; i++) {
        //Check if arguments value is not null
        //Param Name
        if (i % 2 == 0) {
          if (i != 0) {
            result += '&';
            result += this.normalizeParamName(arguments[i]);
          }
        } else {
          //Value
          if(arguments[i] === "null")
            arguments[i] = null;
          result += arguments[i];
        }

      }
      return result;
    }
    return null;
  }

  /**
   * Convert to snake case string
   *
   * @param param
   * @returns {any}
   */
  private static normalizeParamName(param: any): any {
    return param.replace(/(?:^|\.?)([A-Z])/g,
      (x: any, y: any) => "_" + y.toLowerCase()).replace(/^_/, "") + '=';
  }


}

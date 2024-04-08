class Currency {

    constructor(code, name, symbol) {
      this.code = code;
      this.name = name;
      this.symbol = symbol;
    }
  
    toString() {
      return `${this.name} (${this.code}) - ${this.symbol}`;
    }


}
class StringBuilder {
  #str = "";
  constructor(initialStr) {
    this.#str = initialStr;
  }

  getValue() {
    return this.#str;
  }

  padStart(value) {
    this.#str = value + this.#str;
  }

  padEnd(value) {
    this.#str = this.#str + value;
  }

  padBoth(value) {
    this.#str = value + this.#str + value;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

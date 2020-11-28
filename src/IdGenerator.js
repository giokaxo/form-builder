class IdGenerator {
  constructor(initialValue = 1) {
    this.id = initialValue;
  }

  get() {
    return ++this.id;
  }
}

export default new IdGenerator();

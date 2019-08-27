class Per {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}

var p1 = new Per('zz');
console.log(p1.getName());

p1.setName('ss');
console.log(p1);


namespace A {
  interface Animal {
    name: string;
    eat(str: string): void;
  }

  export class Dog implements Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    eat(): void {
      console.log(this.name + '  ' + ' food');

    }
  }
}

namespace B {
  interface Animal {
    name: string;
    eat(str: string): void;
  }

  class Dog implements Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    eat(): void {
      console.log(this.name + '  ' + ' food');

    }
  }

  var d: Dog = new Dog('ss');

  d.eat();
}
let Dog = A.Dog;
var d = new Dog('ss');
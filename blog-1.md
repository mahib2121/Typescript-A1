- **Inheritance**: Inheritance allows one class to acquire the properties and methods of another class for code reuse and hierarchy building.
  class Animal {
  eat() {
  console.log("Eating...");
  }
  }

class Dog extends Animal {
bark() {
console.log("Barking...");
}
}
const dog = new Dog();
dog.eat();

- **Polymorphism**: Polymorphism allows objects of different classes to be treated through the same interface while behaving differently.
  class Animal {
  makeSound() {
  console.log("Animal sound");
  }
  }

class Dog1 extends Animal {
makeSound() {
console.log("vheu");
}
}

class Dog2 extends Animal {
makeSound() {
console.log("vheu");
}
}

- **Abstraction**: Abstraction hides unnecessary implementation details and exposes only essential functionality.
  abstract class Payment {
  abstract pay(amount: number);
  }

class B_Payment extends Payment {
pay(amount: number) {
console.log(`Paid ${amount} using bKash`);
}
}

- **Encapsulation**: Encapsulation protects data by restricting direct access and controlling it through methods.
  class Acc {
  private balance: number = 1000;

  getBalance() {
  return this.balance;
  }
  }

const account = new Acc();

console.log(account.getBalance());

In large-scale TypeScript projects, these four OOP pillars help organize code into reusable, maintainable, and modular components, reducing complexity by improving code structure, flexibility, security, and scalability.

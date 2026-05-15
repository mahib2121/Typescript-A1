# Object-Oriented Programming (OOP) in TypeScript

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects and classes.  
TypeScript supports OOP concepts strongly because it is built on top of JavaScript with added type safety and class-based features.

The four main pillars of OOP are:

1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation

---

# 1. Inheritance

## Definition

Inheritance allows one class to acquire the properties and methods of another class for code reuse and hierarchy building.

## Example

```typescript
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
dog.bark();
```

## Output

```text
Eating...
Barking...
```

# 2. Polymorphism

## Definition

Polymorphism allows objects of different classes to be treated through the same interface while behaving differently.

## Example

```typescript
class Animal {
  makeSound() {
    console.log("Animal sound");
  }
}

class Dog1 extends Animal {
  makeSound() {
    console.log("Vheu Vheu");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow Meow");
  }
}

const animals: Animal[] = [new Dog1(), new Cat()];

animals.forEach((animal) => {
  animal.makeSound();
});
```

## Output

```text
Vheu Vheu
Meow Meow
```

# 3. Abstraction

## Definition

Abstraction hides unnecessary implementation details and exposes only essential functionality.

## Example

```typescript
abstract class Payment {
  abstract pay(amount: number): void;
}

class BkashPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using bKash`);
  }
}

class CardPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Card`);
  }
}

const payment = new BkashPayment();

payment.pay(500);
```

## Output

```text
Paid 500 using bKash
```

# 4. Encapsulation

## Definition

Encapsulation protects data by restricting direct access and controlling it through methods.

## Example

```typescript
class Account {
  private balance: number = 1000;

  getBalance() {
    return this.balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }
}

const account = new Account();

account.deposit(500);

console.log(account.getBalance());
```

## Output

```text
1500
```

# Advantages of OOP in TypeScript

- Improves code reusability
- Makes code easier to maintain
- Reduces complexity in large projects
- Increases scalability
- Improves security with encapsulation
- Helps organize project structure
- Encourages modular development

---

# Role of OOP in Large-Scale TypeScript Projects

In large-scale TypeScript projects, the four pillars of OOP help developers manage logic efficiently and reduce complexity.

## How They Help

| OOP Pillar    | Benefit                  |
| ------------- | ------------------------ |
| Inheritance   | Reuses common code       |
| Polymorphism  | Makes systems flexible   |
| Abstraction   | Simplifies complex logic |
| Encapsulation | Protects sensitive data  |

These principles help developers create:

- Modular applications
- Clean architecture
- Scalable systems
- Easy-to-maintain codebases

---

# Conclusion

OOP is one of the most important programming concepts in TypeScript development.  
By using Inheritance, Polymorphism, Abstraction, and Encapsulation, developers can build structured, reusable, secure, and scalable applications efficiently.

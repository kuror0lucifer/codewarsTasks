// Classy Extentions

// Classy Extensions

// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task

// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

// Simple Tests:
// const { assert } = require('chai');

// describe("Cat tests", () => {
//   it('Fixed Tests', () => {
//     var cat = new Cat('Mr Whiskers');
//     assert.strictEqual(cat.speak(),'Mr Whiskers meows.')
//     cat = new Cat('Lamp');
//     assert.strictEqual(cat.speak(),'Lamp meows.')
//     cat = new Cat('$$Money Bags$$');
//     assert.strictEqual(cat.speak(),'$$Money Bags$$ meows.')
//     assert.instanceOf(cat, Animal, "Your class should extend the Animal class");
//   });
// });

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} meows.`;
  }
}

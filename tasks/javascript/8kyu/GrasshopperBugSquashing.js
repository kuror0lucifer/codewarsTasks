// Grasshopper - Bug Squashing

// Terminal game bug squashing

// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

// You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.

// - combat
// - buyHealth
// - getCoins
// - printStatus
// - rollDice
// - move

// Sample Tests:
// const Test = require('@codewars/test-compat');

// describe('syntax bug fixes', () => {
//   it('should define varirables and store values', () => {
//     Test.assertEquals(health, 100)
//     Test.assertEquals(position, 0)
//     Test.assertEquals(coins, 0)
//   })
// })
// describe('reference error bug fixes', () => {
//   it('should only call functions that exist', () => {
//     Test.expectNoError(() => {
//       main()
//     })
//   })
// })
// describe('runtime error bug fixes', () => {
//   it('should roll dice first', function () {
//     Test.assertEquals(log[0], 'rollDice')
//   })
//   it('should move second', function () {
//     Test.assertEquals(log[1], 'move')
//   })
//   it('should combat third', function () {
//     Test.assertEquals(log[2], 'combat')
//   })
//   it('should get coins fourth', function () {
//     Test.assertEquals(log[3], 'getCoins')
//   })
//   it('should buy health fifth', function () {
//     Test.assertEquals(log[4], 'buyHealth')
//   })
//   it('should print status sixth', function () {
//     Test.assertEquals(log[5], 'printStatus')
//   })
// })

var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

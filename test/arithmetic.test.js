const arithmetic = require('../arithmetic');
console.log(arithmetic)

test('adds num1 + num2 to equal num3', () => {
  expect(add(num1, num2)).toBe(num3);
  });

test('subtracts 1 - 2 to equal 1', () => {
    expect(subtract(1, 2)).toBe(1);
  });

test('multiplies 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });

test('divides 1 % 2 to equal 2', () => {
    expect(divide(1, 2)).toBe(2);
  });





// const arithmetic = () => {

//     var add = function(num1, num2) {
//         return num1 + num2};
    
//     var subtract = function(num1, num2) {
//         return num1 - num2};
    
//     var multiply = function(num1, num2) {
//         return num1 * num2};
    
//     var divide = function(num1, num2) {
//         return num1 / num2};
//     }
    
//     module.exports = arithmetic;
    
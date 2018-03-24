const fizzBuzz = require('./fizzbuzz');

test ('fizzbuzz is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test ('fizzbuzz should return fizz if parameter is divisible by 3', () => {
  expect(fizzBuzz(3)).toEqual('fizz');
  expect(fizzBuzz(6)).toEqual('fizz');

});

test ('fizzbuzz should return buzz if parameter is divisible by 5', () => {
  expect(fizzBuzz(5)).toEqual('buzz');
  expect(fizzBuzz(10)).toEqual('buzz');

});

test ('fizzbuzz should return fizzbuzz if parameter is divisible by 3 and 5', () => {
  expect(fizzBuzz(15)).toEqual('fizzbuzz');
  expect(fizzBuzz(30)).toEqual('fizzbuzz');

});

test ('fizzbuzz should return same number if is not divisible by 3 or 5', () => {
  expect(fizzBuzz(4)).toEqual('4');
  expect(fizzBuzz(7)).toEqual('7');

});
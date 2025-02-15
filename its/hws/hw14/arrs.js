const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers1 = Array.from(numbers, (el) => el*el);
console.log(squaredNumbers1)

const squaredNumbers = numbers.map((item) => {
  return item ** 2;
});
console.log(squaredNumbers);
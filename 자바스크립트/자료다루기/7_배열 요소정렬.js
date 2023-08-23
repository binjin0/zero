const numbers = [4, 2, 5, 1, 3];
const orderNumbers = numbers.sort(function (a, b) {
  return a - b;
});

console.log(orderNumbers);

const strings = ["마", "가", "라", "나", "다"];
const orderStrings = strings.sort(function (a, b) {
  return a.localeCompare(b);
});

console.log(orderStrings);

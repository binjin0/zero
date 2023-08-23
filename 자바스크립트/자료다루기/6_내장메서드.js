/*
map
filter
reduce
*/
const langs = ["JS", "HTML", "CSS"];
const newLangs = langs.map(function (lang) {
  return lang + "언어";
});
console.log(langs);
console.log(newLangs);

const langs2 = ["js", "html", "css", 1, 2, 3, 4];
const numbers = langs2.filter(function (el) {
  if (typeof el === "number") {
    //타입이 number인것만 골라냄
    return true; //el안쓰고 true적어도 정상적으로 반환됨
  }
});
console.log(numbers);

const strings = langs.filter((el) => typeof el === "string");

console.log(strings);

function sumTotal(...numbers) {
  let temp = 0;
  for (let i = 0; i < arguments.length; i++) {
    temp = temp + arguments[i];
  }
  return numbers.reduce(function (total, current) {
    return total + current;
  }, 0);
}
console.log(sumTotal(1, 2, 3, 4, 5, 6, 7));

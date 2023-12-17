/**
 * for .. in 반복문
 for( key in object)
- 객체의 key,value형태를 반복하여 수행하는데 최적화 된 유형
- 첫번째부터 마지막까지, 객체의 키 개수만큼 반복
 */
const person = { fname: "John", jname: "Bob", age: 25 };
let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

/**
 * for .. of 반복문
 for(variable of literable)
 - Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능한 유형
 - ES6에 새로 추가된 Collection 기반의 반복 구문
 */

let language = "javaScript";
let text = "";

for (let x of language) {
  text += x;
  console.log(x);
}

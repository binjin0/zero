/**
* 프로토타입
자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
띠라서 자바스크립트는 프로토타입을 기반으로 동작한다.


*constructor 생성자

 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const jang = new Person("jang", 99);
const hs = new Person("hs", 11);

console.log(jang.constructor.name);
console.log(hs.constructor.name);

const obj = {};
const arr = [];
const func = function () {};
const str = new String("str");

console.log(obj.constructor.name);
console.log(arr.constructor.name);
console.log(func.constructor.name);
console.log(str.constructor.name);

console.log(obj instanceof Object); //true를 반환. instaneof를 통해 생성자의 속성이 객체의 프로토입 체인 어디에나 나타나는지 테스트 가능하다.
console.log(arr instanceof Array);
console.log(func instanceof Function);
console.log(str instanceof String);

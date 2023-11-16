//원시값
const bool = false;
const num = 123;
const str = "string";

/*원시값의 래퍼객체 -> 파스칼 케이스(첫글자와 중간 글자들이 대문자인 경우)로 쓰여짐
=>어떻게 보면 이것은 생성자의 역할을 한다.
*/
const bool2 = new Boolean(false);
const num2 = new Number(123);
const str2 = String("string");

console.log(bool); //false
console.log(bool2); //Boolean:false

console.log(typeof bool); //boolean 원시값
console.log(typeof bool2); //object 객체

console.log(bool2 instanceof Boolean); //true

//암튼 원시타입은 래퍼객체가 존재하지만 굳이 사용할 필요가 없다.

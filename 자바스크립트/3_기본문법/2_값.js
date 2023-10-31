/* 
1. 원시 값
객체가 아니면서 메서드도 가지지 않는 데이터. 
string,number,boolean,undefined, symbol,null이 존재한다.
원시값 자체는 불변하여 변형할 수 없다. 하지만 원시값을 할당한 변수는 새로운 값을 다시할 당할 수 이썽
바뀐 것처럼 나타낼 수는 있다.
*/
const str = "word";
upper_str = str.toUpperCase();
console.log(upper_str); //WORD -> 원시값을 할당한 변수를 사용하여 값을 변화시킬 수 있었음

const str1 = "word";
str1.toUpperCase();
console.log(str1); //word -> 원시값 자체를 변형할려했으나 불변성 특징으로 변하지 않음

/*
undefined : typeof instance =="undefined"
Boolean : typeof instance == "boolean"
Number : typeof instance == "number"
String : typeof instance == "string"
BigInt : typeof instance == "bigint"
Symbol : typeof instance == "symbol"(ECMAScript 6에 추가됨)
null : typeof instance == "object"
*/
//ex
const un = undefined;
const boolean = false;
const num = 0;
const str2 = "문자열";
const nu = null;

console.log(typeof un);
console.log(typeof nu); //object
console.log(typeof bool);
console.log(typeof num);
console.log(typeof str2);

/*
2. 객체 
원시값이 아닌 데이터 타입 즉 래퍼런스,객체타입
*/
//ex
const obj = {
  name: "jang",
};
const arr = ["jang"];
function func() {
  return "jang";
}
console.log(typeof obj); //object
console.log(typeof arr); //object
console.log(typeof func); //function -> ...?

/*
값을 왜 배웠을까?

아래와 같은 상황 때문에!
*/
const numstr = "0";
if (numstr === 0) {
  console.log("num은 0입니다.");
} else {
  console.log("num은 0이 아닙니다.");
}

/*
동등 연산자를 사용할 때
염격한 비교 => ===
느슨한 비교 => ==

*/

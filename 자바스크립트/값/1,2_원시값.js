/*
js 타입
-원시(Primitive)
-객체(Refernce)

1. 원시(Primitive)값
type of undefined ->'undefined'
type of true -> 'boolean'
type of 'string' ->'string'
type of 123 ->'number'
type of 9007199254740992n -> 'bigint'
type of Symbol() -> 'symbol'
type of null ->'object' js에서 원시값으로 인정했지만 typeof는 타입오류로 ovject로 출력된다.

=>이러한 원시타입은 불변하다.
*/
let test = "string";
console.log(test.toUpperCase()); //STRING

console.log(test); //string -> test를 바꿨는데도 불구하고 그대로 출력되는 이유? 원시값은 불변하기때문
//그럼 바꾸기 위해서는? 다시 재할당해면된다.
//test=test.toUpperCase()해야함

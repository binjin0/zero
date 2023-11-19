//함수선언문
function func(param1, param2) {
  return param1 + param2;
}
function func(param1, param2) {
  return "param1 + param2";
}
/*
함수를 같은 이름으로 여러개 만들었을 때의 문제점
-> 그냥 마지막에 선언된 함수만 호출됨. 이러한 현상 코딩할때 매우 위험. 암튼 호이스팅이라는 것 때문임.
*/
console.log(func(1, 2));

//함수선언문보다 안전하게 할 수 있는 방법 -> 함수 표현식
//1.함수표현식 (+기명함수)
const func1 = function func() {
  return "func";
};
//표현식으로 하면 이름을 중복으로 쓸 수 없기때문에 애초에 선언문으로 선언했을 때의 문제가 발생하지 않는다.
const func2 = function func() {
  return "func";
};
console.log(func1());

//2. 함수표현식(익명함수)
const func3 = function () {
  return "func";
};

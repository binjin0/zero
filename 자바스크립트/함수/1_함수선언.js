/*
1. 함수의 종류
- 함수선언문
-메소드
메소드:객체의 프로퍼티의 value가 함수일 경우
-생성자함수
-화살표함수
*/

//함수선언문
function func() {}

console.log(func()); //자바스크립트 함수는 일반적으로 반환문을 생략할 수 있지만 내부적으로는 undefined가 리턴되고 있다.(반환문은 return문을 말함)

const obj = {
  //메서드
  porp: function () {},
};
//생성자 함수 ->첫글짜 대문자
function Myobj() {}
//화살표 함수 (ES2015+, ES6) ->변수에 담아서 사용가능
const arrowFunc = () => {};

//함수 사용하기
func();

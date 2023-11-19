/*
arguments : 함수에 전달된 인수에 해당하는 Array 형태의 객체
- 화살표 함수에는 존재하지 않음
*/

function func() {
  return arguments; //배열처럼 표현되지만 어쩼든 객체임 따라서 배열 메소드를 사용할 수 없음. 따라서 배열로 형변환 해줘서 사용하자
}
console.log(func(1)); //배열처럼 표현되지만

//arguments -> 배열 형변환
const func1 = function () {
  const converArr = Array.from(arguments);
  return converArr.reduce((prev, curr) => prev + curr);
};
console.log(func1(1, 2, 3, 4, 5, 6, 7));

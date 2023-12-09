let square = {
  height: 50,
  width: 70,
  color: undefined,
  name: null,
};

//얕은복사 swallow copy
let swallowSquare = square;
swallowSquare.height = 60;
console.log(swallowSquare);
console.log(square); //바꾼 값이 반영됨

//깊은복사 deep copy
//복사 방법 1. JSON.parse& JSON.stringify 이용하기
/*
JSON.stringify() : 객체를 json 문자열로 변환시킴. 변환시키는 과정에서 원본 개체와의 참조가 모두 끊어짐
JSON.parse : josn문자열에서 다시 javascript 객체로 만들어줌.
*/
let deepSquare = JSON.parse(JSON.stringify(square));
deepSquare.height = 90;
console.log(deepSquare);
console.log(square); //바꾼 값 반영 안됨.

//복사방법 2.Object 라이브러리 함수 사용
let deepSquare2 = Object.assign({}, square); // 값 초기화하고 square 복사
deepSquare2.height = 100;
console.log(square); //바꾼 값 반영 안됨.
console.log(deepSquare2);

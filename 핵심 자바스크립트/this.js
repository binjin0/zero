/*
this
- 자기자신
- 어떤 식으로 함수가 호출되었는지에 따라 다르게 매핑 된다.
- method의 경우 실행하고 있는 객체를 참조하고 일반 함수의 경우 전역객체를 참조한다.
- stric mode 여부에 따라 다르게 매핑된다.
- bind()라는 함수로 this가 가리키는 객체 수동 매핑된다.
전역 객체?
- 현재 실행되는 자바스크립트 환경의 모든 정보를 다 담고 있는 전역 범위 데이터 저장 영역
= 브라우저의 경우 window, Node.js의 경우 global
 */
console.log("-----------전역에서 this 실행--------------");
console.log("global space", this); //전역객체 window 가리킴
let name = "globalName";
function showThis() {
  console.log("showThis():", this);
}
let myObject = {
  name: "Silva",
};
console.log("----------함수에서 this 실행-----------");
showThis(); //전역객체 window 가리킴
console.log("------------객체에서 this 실행-----------");
myObject.objShowThis = showThis;
myObject.objShowThis(); //자기자신

//명백한 바인딩
var x = -1;
const myGrid = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
const unboundGetX = myGrid.getX;
console.log("unboundGetX():", unboundGetX());

const boundGetX = unboundGetX.bind(myGrid);
console.log("boundGetX():", boundGetX());
console.log("--------------------------");

//stric mode
("use strict");
//엄격모드에서 함수 내부의 this는 undefined
let name1 = "globalName";
console.log("global space:", this);
function showThis1() {
  console.log("showThis1()", this);
}
let mtObject = {
  nmae: "Sliva",
};
console.log("-------------------------------");
showThis1();

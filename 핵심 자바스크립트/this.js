/*
this
- 자기자신
- 어떤 식으로 함수가 호출되었는지에 따라 다르게 매핑 된다.
- method의 경우 실행하고 있는 객체를 참조하고 일반 함수의 경우 전역객체를 참조한다.
전역 객체?
- 현재 실행되는 자바스크립트 환경의 모든 정보를 다 담고 있는 전역 범위 데이터 저장 영역
= 브라우저의 경우 window, Node.js의 경우 global
 */
console.log("global space", this);
let name = "globalName";
function showThis() {
  console.log("showThis():", this);
}
console.log("------------------------------");
showThis();

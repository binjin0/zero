/**
* 비동기
하나의 작업이 다 끝나기 전에 다른 작업이 시작된다.
실행순서와 실행되는 흐름을 이해하기 어렵다.

* 동기
순차적으로 흐름




자바스크립트는 비동기를 처리할 수 있다. 
 */

//동기 : 위에서 아래로 순차적으로 실행이 되는 것.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//스레드의 개념이 들어가면서 비동기가 나온다.
/**
 * 스레드
 우리몸의 스레드
 - 강의를 보는 눈
 -강의를 듣는 귀


 자바스크립트의 스레드
 자바스크립트는 싱글 스레드 언어이다.
 그러힉때문에 비동기 개념이 들어오게 된다.

 */

//예시1
const btn = document.querySelector("button"); //dom으로 button가져옴
btn.addEventListener("click", () => {
  //addEventlistener부터 비동기임. 사용자가 버튼을 클릭할때마다 함수를 실행시키기때문에! 사용자가 언제 클릭할지 모르니깐~!
  alert("You clicked me!");

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph";
  document.body.appendChild(pElem);
});

//예시2
console.log("시작 ===");
//1000밀리세컨드 후에 콜백함수를 실행해주는 함수
setTimeout(() => {
  console.log("Set Timeout");
}, 1000);

console.log("종료 ===");

//실행결과 : 시작=== 뜨고 종료 ===뜨고 Set Timeout뜬다.

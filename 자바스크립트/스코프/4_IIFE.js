/*
IIFE
즉각적으로 실행되는 함수
블럭스코프를 흉내내는 새로운 스코프를 만들어내는 것
: 함수는 괄호안에 넣고 바로 실행시켜주는 것
*/

//아래 코드와 같이블록스코프 안에서 var로 변수를 선언했을 때 블록스코프 밖에서도 사용이 가능한 상황이 발생했다.
//물론 let을 사용하면 해결이 되었지만 더 확실하게 없애기 위해 IIFF를 사용하기 시작했다.
if (true) {
  var temp1 = "hello";
}
console.log(temp1); //hello가 출력됨.

//IIFF를 이용한 코드
if (true) {
  (function (/*매개변수 적는 곳*/) {
    var temp = "hello";

    console.log(temp); //hello
  })(/*인자 적는 곳*/);
}

console.log(temp); //오류

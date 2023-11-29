/*
IIFE(Immediately Invoked Function Expression)
즉각적으로 실행되는 함수
표현 내부 변수는 외부로부터 접근 불가.
IIFE 변수 할당시 자체 저장X. 즉시 실행된 함수 결과만 저장O.
블럭스코프를 흉내내는 새로운 스코프를 만들어내는 것
: 함수는 괄호안에 넣고 바로 실행시켜주는 것


IIFE 사용 이유
- 불필요한 변수 및 함수 생성X
- Scope 충돌 x
- 한번만 호출하는 코드의 경우 사용

IIFE 표현식
- 함수 리터럴을  ()로 감싼 형태

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

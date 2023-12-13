/*
클로져(Closure)

A함수 안에 B함수가 선언 되었을때 B함수가 참조하는 A함수 안쪽영역


클로져의 활용
- Function factory(비슷한 로직의 서로다른 함수를 만들어내는 함수)
- Module Design Pattern : IIFE를 활용한 private변수와 method를 가지는 module 생성 가능

디자인패턴 ? 프로그래밍 언어의 특성에 기반하여 어떠한 목적의 개념을 코드로 구현하고자 할 때 사용되는 개발 기법
Private? 객체지향 프로그래밍에서 접근제어에 있어 폐쇄적 성질을 뜻함. Object를 사용하는 코드에서 Object내부변수또는 함수를 직접 엑세스 하거나 변조할 수 없는 성질.
IIFE? 즉시실행함수. 함수를 즉시 실행함으로서 전역 객체의 오염을 방지할 수 있음. 인터프리터가 빠르게 해당코드를 처리하도록 할 수 있음
*/
function makeFunc() {
  let name = "Mozilla";

  function displayName() {
    counter += 1;
    console.log(name, "~", counter);
  }

  let counter = 0;
  return displayName;
}
let myFunc = makeFunc();
myFunc();
myFunc();
myFunc();

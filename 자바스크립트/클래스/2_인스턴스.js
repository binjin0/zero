/**
 * 인스턴스
 인스턴스를 생성하려면
 1. 생성자함수 사용
 2. 싱글 리터럴인 객체로 생성하기
 3.클래스 이용
 */

//객체로 생성하기
const me = {
  name: "jang",
  age: 10,
  location: "korea",
};

//생성자함수 사용하기
function Func() {}

class Classs {}

const newInstance = new Func();
const newInstance2 = new Classs();

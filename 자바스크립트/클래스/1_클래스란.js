/*
*클래스
프로토타입 기반 상속을 사용한다. 

객체를 생성하기 위한 템플릿이다. 


*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const jang = new Person("jang", 99);
const hs = new Person("hs", 11);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

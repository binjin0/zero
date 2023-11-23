/*
*프로토타입 체인
자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근시 자신의 것 뿐만 아니라 __proto__가
가리키는 링크를 따라서 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 객체를 접근할 수 있다.
예를들면 배열을 사용할때 이것의 부모인 객체의 메소드까지 사용가능 것이 있다.

*/

const animal = {
  sayName() {
    return "ANIMAL";
  },
};
const dog = Object.create(animal); //프로토타입 체인에 의해 객체의 메소드도 사용 가능

console.log(dog.sayName()); //ANIMAL

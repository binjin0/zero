/*생성자 함수로 인스턴스 만들기
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;

  this.getName = function () {
    return this.name + "입니다";
  };
}

const me = new Person("jang", 10, "Korea");
const you = new Person("kim", 20, "China");

console.log(me.getName());
console.log(you.getName());
*/

//클래스 이용하여 인스턴스 만들기
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  getName() {
    return this.name + "입니다.";
  }
}

const me = new Person("jang", 10, "Korea");
const you = new Person("kim", 20, "China");

console.log(me.getName());
console.log(you.getName());

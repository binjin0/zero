/*
*클래스 확장

*/

//Super 클래스
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  getInfo() {
    return this.name + "가(이)" + this.sound + "소리가 낸다.";
  }
}

class Friends extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

const dog = new Friends("개", "멍멍");
const cat = new Friends("고양이", "냐옹");

console.log(dog.getInfo());
console.log(cat.getInfo());

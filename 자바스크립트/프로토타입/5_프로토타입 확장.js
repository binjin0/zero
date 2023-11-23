/*
*프로토타입 확장(extends, 상속)

부모 => 확장 => 자식
프로토타입으로 하는 방법. <- 현재 파일에서 사용한 방법
클래스로 하는방법.
*/
//Super 클래스
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.getInfo = function () {
  return this.name + "가(이)" + this.sound + "소리가 낸다.";
};

//Sub 클래스
function Friends(name, sound) {
  Animal.call(this, name, sound);
}
Friends.prototype = Object.create(Animal.prototype);
Friends.prototype.constructor = Friends;

const dog = new Friends("개", "멍멍");
const cat = new Friends("고양이", "냐옹");

dog.getInfo();
cat.getInfo();

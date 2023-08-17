/*
2. 객체(Reference) =참조값이라고도 불른다.
ex)
객체
배열
함수
*/
const object = {
  name: "jang", //@0001이라는 메모리 주소를 갖고있음.
  age: 11,
  arr: [],
  func: function () {},
  child: {},
};
const array = [[], 11, "jang", function () {}];
function func() {}

object.name.toUpperCase();
console.log(object); //{str:'jang'} 분명 가변적이라고 했는데 왜 대문자로 안바뀌었지,.? 이를 담고 있는 object가 래퍼런스값이라고 해도 그 안의 갚이 원시값이기때문에 원시값을 변경하면 변하지 않는다.
object.num = 123;
object.bool = true;
console.log(object);

//=>이러한 객체들은 불변하지 않고 가변적이면서 이 안의 값들은 메모리 주소를 가지고 있다.

//instanceof : 객체의 instance가 맞는지 확인하는 것
console.log(object instanceof Object); //true
console.log(func instanceof Function); //true
console.log(array instanceof Array); //true

//toString -> 문자열로 확인할 수 있는 도구
console.log(Object.prototype.toString.call(array)); //[object Array]
console.log(Object.prototype.toString.call(func)); //[object Array]
console.log(Object.prototype.toString.call(object)); //[object Array]

//래퍼런스 타입 확인
console.log(typeof func); //function
console.log(typeof array); //object

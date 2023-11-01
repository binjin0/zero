//함수 선언문
function func(num) {
  if (10 > num) {
    return "hello";
  }
}
//함수 호출
console.log(func()); //undefined
console.log(func(5)); //hello

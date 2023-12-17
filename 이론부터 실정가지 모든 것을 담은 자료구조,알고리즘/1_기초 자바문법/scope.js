//global scople
let x = 1;
let y = 2;
console.log(x);
console.log(y);
{
  //local scope
  let x = 3;
  let y = 4;
  console.log(x);
  console.log(y);
}
function scope() {
  let x = 5;
  let y = 6;
  console.log(x);
  console.log(y);
}
scope();

console.log(x);
console.log(y);

console.log("-----------------------------------");
//global scope
let A = 1;
let B = 2;
{
  //local scope
  let C = 3;
  let D = 4;

  console.log(A);
  console.log(C);
}
// console.log(C); //ReferneceError:C is not defined. ( C는 지역스코프에서 선언되었으므로 전역 스코프 범위에서는 사용이 불가능하다.)

console.log("-----------------------------------");
//global scope
let index = 1000;
function local_func() {
  //function level scope
  let index = 100;
  for (let index = 0; index < 10; index++) {
    //block level scope
    console.log(index);
  }
  console.log(index);
}

local_func();
console.log(index);

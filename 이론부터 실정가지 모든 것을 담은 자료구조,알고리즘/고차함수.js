/**
 * 고차함수
 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수
 매개변수로 전달되는 함수는 콜백함수이다.
 대표배열 조작 메서드
 - 임의 정렬 : Array.sort(callback function)
 - 반복 작업 : Array.forEach()
 - 콜백함수 결과 배열 반환 : Array.map()
 - 조건 만족하는 하나의 값 반환 : Array.find()
 - 조건 만족하는 값 배열로 반환 : Array.filter()
 - 누적 결과 값 반환 : Array.reduce()
 */

//sort()의문제와 한걔점

//상황1
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort()); //[-1,0,10,12,2,20,3,4]라는 결과나옴. why? 배열이 일시적으로 문자열로 변경됐기때문

//이러한 한계점으로 sort함수에서 callback함수를 받아 고차함수를 지원하는 방법을 사용한다.

let ascending_order = function (x, y) {
  return x - y;
};
let descending_order = function (x, y) {
  return y - x;
};
console.log(nums.sort(ascending_order)); //고차함수 이용
console.log(nums.reverse(descending_order)); //고차함수 이용

//상황2
let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort()); //['Orange','apple','melon','orange]. 대소문자 구분 없이 정렬이 안된다....대문자 있으면 대문자부터 정렬해 버림

//이러한 한계점으로 sort함수에서 callback함수를 받아 고차함수를 지원하는 방법을 사용한다.

let ascending = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};
/**
 *위 if문 해석
  1: 첫 번째 인자를 두 번째 인자보다 크다고 간주합니다. 따라서 정렬 시 첫 번째 인자가 두 번째 인자보다 뒤에 위치하게 됩니다.

-1: 첫 번째 인자를 두 번째 인자보다 작다고 간주합니다. 따라서 정렬 시 첫 번째 인자가 두 번째 인자보다 앞에 위치하게 됩니다.

0: 두 인자를 서로 같다고 간주합니다. 정렬 시 순서를 변경하지 않습니다.
 */
let descending = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (y < x) return -1;
  else return 0;
};

console.log(fruits.sort(ascending));
console.log(fruits.sort(descending));

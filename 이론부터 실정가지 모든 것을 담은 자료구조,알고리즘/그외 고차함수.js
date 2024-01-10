/*
1. forEach()
배열 요소 별 콜백함수 각각에 실행
Array.forEach(function(item,index,array){})

item - 배열 요소, index - 배열 위치, array - 배열
*/

//일반 for문
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
//forEach함수 사용
nums.forEach(function (item, index, array) {
  console.log(item, index, array);
});

/**
 2. map()
배열 요소 별 함수 호출 및 결과를 배열로 반환.
Array.map(function(item,index, array){})

item - 배열 요소, index - 배열 위치, array - 배열
 */

//for문
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop);

//map
let use_map = nums.map(function (item) {
  return item * 2;
});

console.log(use_map);

/**
3. find()
콜백 함수의 조건을 만족하는 단 하나의 값만 반환. 
Array.find(function(item,index,array){})

item - 배열 요소, index - 배열 위치, array - 배열
 */

let users = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let find_job = users.find(function (user) {
  return user.job == false;
});
console.log(find_job);

let find_age = users.find(function (user) {
  return user.age > 19;
});
console.log(find_age);

/**
4.filter()
콜백함수의 조건을 만족하는 모든 값을 배열로 반환
Array.filter(function(item,index,array){})

item - 배열 요소, index - 배열 위치, array - 배열
*/
let filter_job = users.filter(function (user) {
  return user.job == false;
});
console.log(filter_job);
let filter_age = users.filter(function (user) {
  return user.age > 19;
});
console.log(filter_age);

/**
5. reduce()
요소 별 함수 수행 누적 결과값 반환
Array.reduce(function(accumulator,item,index,array){})

-accumulator : 이전 함수 결과(initial로 초기값 설정 가능), - item :배열 요소, -index : 배열 위치, -array : 배열
 */

let num = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = num.reduce(function (accumulator, item, index, array) {
  console.log(accumulator, "\t\t", item, "\t\t", index);
  call_count++;
  return accumulator + item;
}, 0);

console.log(call_count);
console.log(sum);

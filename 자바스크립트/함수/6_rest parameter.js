/*
rest parameter 나머지 매개변수

...

: 배열로 동작 가능. 화살표함수에서도 동작 가능
다른 매개변수와 연관지어 사용 가능.

*/

const func = (first, second, ...nums) => {
  console.log(first);
  console.log(second);
  return nums.reduce((prev, curr) => prev + curr);
};
console.log(func(1, 2, 3, 4, 5, 6, 7));

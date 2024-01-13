/* 5. 중복 단어 제거 */

/* user code */
function answer(arr) {
  let new_arr = [];

  //Array.from()은 JavaScript의 내장 함수로, 유사 배열 객체나 반복 가능한 객체를 배열로 변환하는 데 사용된다.
  new_arr = Array.from(new Set(arr));

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

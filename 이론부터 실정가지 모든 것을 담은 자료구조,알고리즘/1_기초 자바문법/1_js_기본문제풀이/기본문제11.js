/* 5. 중복 단어 제거 */

/* user code */
function answer(arr) {
  let new_arr = [];
  for (let i of arr) {
    if (new_arr.includes(i) === false) {
      new_arr.push(i);
    }
  }

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

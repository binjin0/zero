/* 
 * 2. 두 수 사이 숫자
두 수 사이의 숫자들을 출력하는 함수를 작성하시오.
입력은 두 숫자 값이 주어지며, 입력된 숫자를 포함한 두 수 사이의 자연수를 배열로 반환한다. 
*/
/* user code */
function answer(x, y) {
  let result = [];
  let num1 = x;
  let num2 = y;
  if (x < y) {
    for (let i = 0; i < y - x + 1; i++) {
      result.push(num1);
      num1++;
    }
  } else if (x > y) {
    for (let i = x - y; i >= 0; i--) {
      result[i] = num1;
      num1--;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [3, 7],
  // TC: 2
  [8, 3],
  // TC: 3
  [12, 10],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

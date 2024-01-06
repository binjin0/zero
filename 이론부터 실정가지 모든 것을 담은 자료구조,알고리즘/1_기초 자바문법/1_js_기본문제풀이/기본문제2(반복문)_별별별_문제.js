/*** 1. 별별별 **
 자연수를 입력받아 해당 수만큼 별을 찍는 문자열 반환 함수를 작성하시오.
*/

/* user code */
function answer(num) {
  let result = "";

  // 코드 구현 시작 영역
  for (let i = 0; i < num; i++) {
    result += "*";
  }
  return result;
}

/* main code */
let input = [
  // TC: 1
  5,
  // TC: 2
  7,
  // TC: 3
  12,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

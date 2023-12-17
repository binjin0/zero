/*조건문  switch를 이용하여 1~7 사이의 숫자를 입력 받으면 요일을 출력해주는 코드를 작성하시오.
1(월요일)~7(일요일)로 맵핑된다.
*/
const day = 3;
let weekend = "";
switch (day) {
  case 1:
    weekend = "Monday";
    break;
  case 2:
    weekend = "Tuesday";
    break;
  case 3:
    weekend = "Wednesday";
    break;
  case 4:
    weekend = "Thursday";
    break;
  case 5:
    weekend = "Friday";
    break;
  case 6:
    weekend = "saturday";
    break;
  case 7:
    weekend = "Sunday";
    break;
}
console.log(weekend);

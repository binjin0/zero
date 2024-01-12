/**
 * Date
표준 Built-in 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
Date객체는 1970년 1월 1일 UTC(협정 세계시)자정과의 시간 차이를 밀로초로 나타내는 정수 값으로 표현
 */

//1. Date 생성자

//기본
let date_now = new Date();
let date_now_str = Date(); //new를 안쓰고 Date만쓰면 문자열 형태로 결과가 출력된다.

console.log(date_now);

console.log(date_now_str);

console.log(typeof date_now); //new Date -> object
console.log(typeof date_now_str); //그냥 Date -> string

let date_ms_1 = new Date(0); //기준 default가 1970!
let date_ms_2 = new Date(24 * 3600 * 1000); // 24*3600*1000 -> 하루의 ms
console.log(date_ms_1);
//output : 1970-01-01T00:00:00.000
console.log(date_ms_2);
//output : 1970-01-02T00:00:00.000

let date_str = new Date("2020-01-01");
console.log(date_str);
//output : 1970-01-01T00:00:00.000

//(year,mouth,date) 여기서 mouth는 1월(0)~12월(11)으로 나타낸다.
let date_params_1 = new Date(2021, 0, 1); //2021년 1월 1일 나타내고 싶어서 적었지만 UTC때문에 앞당겨짐.
let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
let date_params_3 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_1);
console.log(date_params_2);
console.log(date_params_3);

//2. 날짜 정보 얻기

let date = new Date();
console.log(date);

//year, month, day(0(sun)~6(sat))
console.log(date.getFullYear()); //2024
console.log(date.getMonth()); //0
console.log(date.getDay()); //5

//hours
console.log(date.getHours());
console.log(date.getUTCHours());

/*getTime:(now - date(0)) milliseconds
  getTimeszoneOffset : (UTC+0 -currentZone) minutes
*/
console.log(date.getTime());
console.log(date.getTimezoneOffset()); //-540 (60으로 나누면 9 따라서 우리나라와 UTC 시간의 차이는 9 )

//3. 날짜 정보 설정

//set year
let ms_year = date.setFullYear(2020, 3, 15);
console.log(date); //output : 2020-04-15T04:31:08.392Z
console.log(new Date(ms_year)); //output : 2020-04-15T04:31:08.392Z

//set date
date.setDate(1);
console.log(date); //2020-04-01T04:36:28.998Z
date.setDate(0); //이전 달의 마지막 날
console.log(date); //2020-03-31T04:36:28.998Z

//set hours
date.setHours(date.getHours() + 2);
console.log(date); //2020-03-31T06:36:28.998Z

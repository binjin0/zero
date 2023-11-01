console.log(1 === 1.0);
//왜 true인가? 부동소수점 방식때문에
//부동소수점 : 움직이는 소수점. 소수점이 떠돌이로 돌아다니고 IEEE표준을 사용한다.
//JavaScript에서 숫자는 부동소수점을 사용하고 있고 IEEE754표준을 이용하고 있다.
//인간이 생각하는 숫자는 10진수이고 컴퓨터가 생각하는 숫자는 10진수가 아니다. 따라서 부동 소수점표기방식을 이용해서 컴퓨터가
//알려듣드록 바뿨주는 정규화 방식이 일어난다.
console.log(Math.pow(2, 999));
console.log(Number.MAX_SAFE_INTEGER);
console.log(isNaN("1"));

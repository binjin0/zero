/*정수 (Integer)
-자바스크립트에는 부동소수점(IEEE-754) 숫자만 존재
-정수를 저장하는 2가지 방법
1.10진 소수가 없는 작은 숫자는 정수로 오래 유지(예.31비트)
2.비트연산자를 이용 32비트 정수로 바꿔 반환*/

//안전한 정수의 최대값
Number.MAX_SAFE_INTEGER;

//안전한 정수의 최소값
Number.MIN_SAFE_INTEGER;

//소수점을 다루는 방법
Math.floor(4.6); //floor : 가장 가까운정수로 내린다.
Math.ceil(4.9); //ceil : 가장 가까운 정수로 올린다.
Math.round(4.6); //round : 가장 가까운 정수로 반올림한다.

/*
암시적 & 명시적 형 변환
*/
// !!-> ㅠboolean
// Number(값) String(값) Boolean(값) Array.from() <- 명시적인 형변환

//암시적인 형변환
const result1 = 1 + "입니다.";
console.log(result1); //1입니다. (암시적인 형변환)
console.log(typeof result1); //string
const result2 = "11" + 11;
console.log(result2); //1111
console.log(typeof result2); //string

//=>string이랑 더해지는 숫자 대부분은 문자열로 변환된다.

const result3 = "2" + "2";
console.log(result3);
console.log(typeof result3); //strgin 22

const result4 = "2" * "2";
console.log(result4);
console.log(typeof result4); //number

//암시적인 변환은 되게 헷갈린다. 따라서 애초부터 명시적인 변환을 사용하면 헷갈리지 않는다.

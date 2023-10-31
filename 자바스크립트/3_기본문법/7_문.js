/*
문(statement) 
명령과 흐름을 제어!
따라서 문 자체가 프로그래밍이다!
if,for,switch-case, .... 등등

*/
//1. if문
if (10 > 1) {
  return "10은 1보다 크다";
} else if (10 === 10) {
  return "";
} else {
  return "";
}
//2.for문
//형식 -> for(초기화식;조건식(평가되는 식); 매번실행되는 평가식;)
const array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/*
concat() 메소드
인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.
*/
const array = ["js", "html", "css"];
const newArr = array.concat("TS", "java");
console.log(array); //concat을 이용했더니 원본배열 훼손되지 않음.
console.log(newArr);

const newArr1 = [...array, "TS", "Java"]; //이방법도 원본 배열 훼손안됨.
console.log(array);
console.log(newArr1);

/*
js에서 변수를 다루는 방법
1. 선언만 하기 -> 그럼 변수는 undefined상태이다.
2. 할당만 하기
3. 선언과 동시에 할당하기
*/

/*undefined와 null의 차이점 */
let variable;
// variable = "string value";
console.log(variable); //variable 변수는 undefiend이다 -> 정의되지 않았다.
const initValue = "null"; //initValue는 null이다.- > 임의로 비워두기 위해 null을 넣어 비어 두었다.
console.log(initValue);

console.log(!undefined); //true
console.log(!!undefined); //false

console.log(!null); //true
console.log(!!null); //fasle

console.log(!undefined === !null); //true
console.log(!!null === !!undefined); //fasle

console.log(null === undefined); //fasle 이렇게 그냥 비교하면 false인데 !을 붙이면 trued임 되게 모호하고 이상함.

console.log(Number(undefined)); //NaN
console.log(Number(null)); //0

/* 위와 같이 둘의 차이점이 되게 모호하다.
따라서 평소에는 undefiend를 사용하고 값을 비워놔야한다면 null을 사용한다.*/

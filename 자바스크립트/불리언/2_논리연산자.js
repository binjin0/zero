/*
-Logical Operator(논리연산자)
OR - ||(또는)
AND - &&
NOT -!
*/

console.log(true || true); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(false && true && true); //fasle
console.log(true && true); //true

//이러한 논리연산자는 if문을 줄여줄 수 있기 때문에 잘 알아두어야 한다.
const age = 20;
const genderType = "GIRL";
const isAdult = age > 19;
const isGirl = genderType === "GIRL";

if (isAdult && isGirl) {
  console.log("나는 성인이다.");
}

const data = "a";
const num = 0;
const boolean = true;

//위처럼 여러 값을 하나로 묶어서 표현할 수 있음 -> 배열
const arr = [data, num, boolean, "name"];

console.log(arr.length);
console.log(arr[2]); //배열은 0번째부터 시작

console.log(typeof arr); //object 불변객체
arr[4] = "Test";
arr[0] = "첫번째";
arr[1] = "second";

console.log(arr); //[ '첫번째', 'second', true, 'name', 'Test' ]

arr.push("마지막");
console.log(arr); //[ '첫번째', 'second', true, 'name', 'Test', '마지막' ]

//배열 순회 ->for
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
//배열 순회 ->forEach
arr.forEach((element) => {
  console.log(element);
});

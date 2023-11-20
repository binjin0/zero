/*
unshift => 배열의 앞에 요소 추가
push => 배열의 끝에 요소 추가
shift => 배열의 앞에 요소 제거
pop => 배열의 끝에 요소 제거
splice => 배열의 인덱스를 기반으로 요소 추가 및 삭제


---->이러한 메소드들은 원본배열을 훼손함.즉 새로운 배열 만들지 못함. 따라서 사용할때 주의해서 사용하자.
 */

const arr = ["one", "two", "three"];
const copyArr = arr; //원본배열 복사

arr.push(1);
arr.push(2);
arr.unshift(0);
console.log(arr);

arr.pop();
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(0, 0, "four"); //0번째 인덱스부터 0개 삭제하고 four을 추가한다.
console.log(arr);

arr.splice(0, 1, "five"); //0번째 인덱스부터 1개를 삭제하고 five를 추가한다.
console.log(arr);

console.log(copyArr); // 원본 배열 훼손되고 원본배열을 메소드를 통해 변형시킨 결과가 그대로 반영된다.

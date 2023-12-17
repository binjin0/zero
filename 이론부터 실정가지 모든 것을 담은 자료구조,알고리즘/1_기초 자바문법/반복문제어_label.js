/**
 * Label 
- 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
- break와 continue를 사용하는 반복문 안에서만 사용 가능하며, break나 continue 지시자 위에 있어아함.
 */

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break;
  }
}

//이중for문자체를 중단시키고 싶을 때 사용

end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break end; //end구문을 break.
  }
}

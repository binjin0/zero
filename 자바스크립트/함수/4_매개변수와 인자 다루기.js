/*
매개변수 
: 함수는 선언하는 측 함수 내에서 지역변수처럼 사용됨.
->매개변수는 순서가 중요함.
인자 : 함수를 사용(호출)하는 측
*/

function func(params) {
  params = params + 10;
  return params;
}

const result = func(1);

console.log(result);

/*위에서 말했듯이 매개변수는 순서가 중요하기 때문에 인자도 매개변수 순서대로 넘겨줘야한다.
->아래와 같이 비어두고 싶은 매개변수는 따로 undefined를 선언해줘야한다. 이러한 불편한 점을 개선하려면? 객체를 매개변수로 받으면 된다.
*/
function func1(p1, p2, p3, p4) {
  console.log(p2, p4);
  return;
}

const result1 = func1(undefined, "p2", undefined, "p4"); //매개변수 순서에 맞게 인자 넘겨줘야함

console.log(result1);

//하지만 이도 해결방법이 있음 => 매개변수를 객체로 받는것

function func2({ p1, p2, p3, p4 }) {
  //매개변수자리에 {}이용해서 감싸주면 객체를 받을수 있음
  console.log(p2, p4);
  return;
}
//인자를 객체로 넘김.
const result2 = func2({
  p2: "p2",
  p4: "p4",
});

console.log(result2);

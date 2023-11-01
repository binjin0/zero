/*
객체
나라는 사람을 프로그래밍 언어로 표현하자면?
*/
const hyobin = {
  //key(property),속성:value
  name: {
    first: "park hyo bin",
    last: "kim",
  },
  ang: 10,
  gender: "female",
  introduce: function (guest) {
    return "hello " + guest + "my name is hyobin";
  },
  hobby: ["youtube", "running"],
};
console.log(hyobin["name"]["last"]);
console.log(hyobin.name);
console.log(hyobin.introduce("kim"));

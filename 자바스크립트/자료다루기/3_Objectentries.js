/*
Object.entries() 메소드
for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성[key,value]쌍의 배열을 반환한다.
(for...in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점이다.)

배열이 배열을 품고 있는 2차배열
객체로 쓰였던 것들이 배열로바뀜
key와 value가 하나의 배열로 묶인다.
하나의 배열안에 좌측은 key 그다음 값이 value이다.

*/
const data = {
  squdName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Sper tower",
  active: true,
  mebers: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiatino resistance", "Turning tiny", "fff"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: ["Million tonne punch", "Damage resistance", "ddd"],
    },
  ],
};
const entries = Object.entries(data);
console.log(entries);

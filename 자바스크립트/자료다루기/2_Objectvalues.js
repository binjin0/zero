/*
Object.values() 메소드
전달된 파라미터 객체가 가지는 속성의 값들로 이루어진 배열을 리턴한다.
for...in 구문과 동일한 순서를 가진다.
값들만 열거함.
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

const vlues = Object.values(data);
console.log(vlues);

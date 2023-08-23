/*
object.keys() 메소드
주어진  객체의 속성 이름들을 일반적인 반복문과 
동일한 순서로 순회되는 열거할 수 있는 배열을 반환

객체의 속성만 배열로 반환
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
const keys = Object.keys(data);
console.log(keys);

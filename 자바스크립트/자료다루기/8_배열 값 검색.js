const members = ["현석", "장현석", "베이스"];

const reslut = members.find(function (member) {
  return member === "제로";
});

console.log(reslut); //있으면 '제로' 리턴, 없으면 undefined리턴

function genHello(name) {
  const resultName = name || "이름없음";

  return "안녕하세여" + resultName + "님 반갑습니다.";
}
console.log(genHello("Jang"));

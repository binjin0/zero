const A = () =>
  new Promise((resolve, reject) => {
    const a = "A 함수 실행 후 생기는 데이터";
    resolve(a);
  });

const B = (a) => {
  console.log(`${a}를 이용하는 B`);
};
A()
  .then((a) => {
    console.log("A2 실행 성공!");
    B(a);
    console.log("--------------------------");
  })
  .catch((error) => {
    console.log(error.message);
  });

const func = async () => {
  const a = await A();
  console.log("A 실행 성공");
  B(a);
};
func();

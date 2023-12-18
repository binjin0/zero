const [count] = document.getElementsByTagName("span");
const countUpButton = document.getElementById("count-up-button");

countUpButton.onclick = () => {
  if (isNaN(Number(count.innerHTML))) return;
  count.innerHTML = Number(count.innerHTML) + 1;
};
count.onmouseover = () => {
  count.style.backgroundColor = "gray";
  count.style.color = "white";
};
count.onmouseout = () => {
  count.style.backgroundColor = "transparent";
  count.style.color = "black";
};

const input = document.getElementsByTagName("input")[0];
input.onfocus = () => {
  input.value = "자동입력";
};

const input2 = document.getElementsByTagName("input")[1];
const result = document.getElementById("result");

input2.onchange = (event) => {
  //event.target -> 이벤트가 발생한 DOM
  //event.target.value -> 이벤트가 발생한 dom의 input2노드의 value
  result.innerHTML = event.target.value;
};

const test = document.getElementById("test");

//크기가 10인 배열을 만들어 0을 넣어줌
//forEach는 배열순회메서드
new Array(10).fill(0).forEach((a, index) => {
  test.addEventListener("click", () => {
    console.log(`test clicked ${index + 1}`);
  });
});

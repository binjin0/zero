const button = document.getElementById("count-up-button");
const buttonWrapper = document.getElementById("button-wrapper");
const buttonSubWrapper = document.getElementById("button-subWrapper");

button.onclick = (event) => {
  //이벤트 버블링 막는법
  event.stopPropagation();
  console.log("button event triggered");
};
buttonWrapper.onclick = () => {
  console.log("wrapper event triggered");
};
buttonSubWrapper.onclick = () => {
  console.log("subWrapper event triggred");
};

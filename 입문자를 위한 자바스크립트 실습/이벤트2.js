const button = document.getElementById("count-up-button");
const buttonWrapper = document.getElementById("button-wrapper");
const buttonSubWrapper = document.getElementById("button-subWrapper");

button.onclick = (event) => {
  event.stopPropagation();
  console.log("button event triggered");
};
buttonWrapper.onclick = () => {
  console.log("wrapper event triggered");
};
buttonSubWrapper.onclick = () => {
  console.log("subWrapper event triggred");
};

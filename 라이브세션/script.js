const init = () => {
  consoleText(["Hello world.", "Console Text", "Made with Love."], "text", [
    "tomato",
    "rebeccapurple",
    "lightblue",
  ]);
};

const consoleText = (words, id, colors) => {
  if (typeof colors === "undefined" || colors.length === 0) {
    colors = ["ffffff"];
  }
  let visible = true;
  let $console = document.querySelector(".js-console");
  let letterCount = 1;
  let x = 1;
  let isWaiting = false;
  let $target = document.getElementById(id);
  $target.setAttribute("style", "color:" + colors[0]);

  window.setInterval(() => {
    if (letterCount === 0 && isWaiting === false) {
      isWaiting = true;
      $target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(() => {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        $target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        isWaiting = false;
      }, 1000 * 1);
    } else if (words[0].length + 1 === letterCount && false === isWaiting) {
      isWaiting = true;
      window.setTimeout(() => {
        x = -1;
        letterCount += x;
        isWaiting = false;
      }, 1000);
    } else if (false === isWaiting) {
      $target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 1000 * 0.12);
};

init();

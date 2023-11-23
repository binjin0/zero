/*
 *callback
다른 함수의 파라미터로써 전달되는 함수

*콜백함수가 왜 필요한가?
자바스크립트는 코드를 위에서 아래로 순차적으로 실행한다. 그러나 코드가 다른 행위가 일어난 뒤에 실행되는 
경우도 있고 순차적으로 실행되지 않을 때도 있다. 즉 비동기적으로 프로그래밍 된다ㅣ
콜백은 태스크가 끝나기 전에 함수가 실행되지 않는 것을 보장한다.
따라서 콜백은 비동기 자바스크립트르 작성할 수 있게 해주고 여러 문제와 에러들로부터
안전하게 지켜준다.

 */

//함수를 위임해주는 것
 //filter라는 메소드에 콜백함수를 넘겨주면 알아서 실행시켜준다. 우리는 이 안에 추상코드를 알 수 없다.?

const isFilter = function (ele, index, array) {
  console.log(ele);
}

[1, 2, 3].filter(isFilter); //filter라는 메소드가 받아서 실행


Array.prototype.filter = functino(callback){
  const array = this;
  for (let i = 0; i < arr.length; i++){
    callback(array[i], i, array);
  }
}

Element.addEventListener('click', (e) => console.log(e));

Element.addEventListener = function (eventType, callback) {
  if (eventType === 'click') {
    const clickEventObject = {
      target:{},
    }
    callback(clickEventObject);
  }
}
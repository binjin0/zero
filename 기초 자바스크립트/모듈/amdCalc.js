define(["./require.js"], function (req) {
  function sum(num1, num2) {
    return num1 + num2;
  }
  function multiple(num1, num2) {
    return num1 * num2;
  }
  return {
    sum: sum,
    multiple: multiple,
  };
});

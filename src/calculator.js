export default (() => {
  function add(...args) {
    return args.reduce((a, b) => a + b);
  }

  function subtract(...args) {
    return args.reduce((a, b) => a - b);
  }

  function divide(...args) {
    return args.reduce((a, b) => a / b);
  }

  function multiply(...args) {
    return args.reduce((a, b) => a * b);
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

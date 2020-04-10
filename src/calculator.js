class Calculator {
  add() {
    return Object.values(arguments).reduce((a, b) => a + b);
  }

  subtract() {
    return Object.values(arguments).reduce((a, b) => a - b);
  }

  divide() {
    return Object.values(arguments).reduce((a, b) => a / b);
  }

  multiply() {
    return Object.values(arguments).reduce((a, b) => a * b);
  }
}

export default Calculator;

const reset = (starterData, flag) => {
  starterData.firstNumber = '0';
  starterData.secondNumber = '';
  starterData.char = '';
  flag.dotFirstNumber = false;
  flag.dotSecondNumber = false;
  flag.firstNumber = false
  flag.secondNumber = false;
  flag.char = false;
  flag.result = false;
}

export {
  reset,
}
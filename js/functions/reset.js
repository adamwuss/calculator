const reset = (starterData, flag) => {
  starterData.secondNumber = '';
  starterData.char = '';
  flag.dotFirstNumber = false;
  flag.dotSecondNumber = false;
  flag.secondNumber = false;
  flag.char = false;
  flag.result = false;
}

export {
  reset,
}
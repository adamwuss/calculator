import { btnDecimal, input } from '../buttons/buttons.js';

const dotListener = (starterData, flag) => {
  btnDecimal.addEventListener('click', () => {
    if (!flag.char && !flag.dotFirstNumber) {
      starterData.firstNumber += btnDecimal.value;
      flag.firstNumber = true;
      flag.dotFirstNumber = true;
      input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
    } else if (flag.char && !flag.dotSecondNumber && flag.secondNumber) {
      starterData.secondNumber += btnDecimal.value;
      flag.secondNumber = true;
      flag.dotSecondNumber = true;
      input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
    } else if (flag.char && !flag.dotSecondNumber && !flag.secondNumber) {
      starterData.secondNumber = '0';
      starterData.secondNumber += btnDecimal.value;
      flag.secondNumber = true;
      flag.dotSecondNumber = true;
      input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
    }
  })
}

export {
  dotListener,
}
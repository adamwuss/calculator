import { input } from '../buttons/buttons.js';
import { reset } from './reset.js';

const resultReturner = (starterData, flag) => {
  const allDataRequired = flag.firstNumber && flag.char && flag.secondNumber;

  if (allDataRequired) {
    switch (starterData.char) {
      case '+':
        starterData.result = Number(starterData.firstNumber) + Number(starterData.secondNumber);
        break;
      case '-':
        starterData.result = Number(starterData.firstNumber) - Number(starterData.secondNumber);
        break;
      case '*':
        starterData.result = Number(starterData.firstNumber) * Number(starterData.secondNumber);
        break;
      case '/':
        starterData.result = starterData.secondNumber !== '0' ? Number(starterData.firstNumber) / Number(starterData.secondNumber) : 'Don\'t divide by 0';
    }
    input.value = String(starterData.result);

    reset(starterData, flag);
    starterData.firstNumber = starterData.result
    flag.result = true;
    flag.firstNumber = true;
  }
}

export {
  resultReturner,
}
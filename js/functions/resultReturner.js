import { input } from '../buttons/buttons.js';
import { reset } from './reset.js';

const resultReturner = (starterData, flag) => {
  if (flag.firstNumber && flag.char && flag.secondNumber) {
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
        if (starterData.secondNumber !== '0') {
          starterData.result = Number(starterData.firstNumber) / Number(starterData.secondNumber);
          break;
        } else {
          starterData.result = 'Don\'t divide by 0';
        }
    }
    flag.result = true;
    input.value = String(starterData.result);
    starterData.firstNumber = starterData.result;
    flag.firstNumber = true;
    reset(starterData, flag);
  }
}

export {
  resultReturner,
}
import { btnChar, input } from '../buttons/buttons.js';
import { resultReturner } from './resultReturner.js';

const charListener = (starterData, flag) => {
  for (const element of btnChar) {
    element.addEventListener('click', () => {
      if (!flag.firstNumber && !flag.secondNumber){
        flag.firstNumber = true;
      } else if (flag.firstNumber && flag.secondNumber) {
        resultReturner(starterData, flag);
      }

      flag.char = true;
      starterData.char = element.value;
      input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
    });
  }
}

export {
  charListener,
}
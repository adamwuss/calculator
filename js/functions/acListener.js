import { btnAC, input } from '../buttons/buttons.js';
import { reset } from './reset.js';

const acListener = (starterData, flag) => {
  btnAC.addEventListener('click', () => {
    starterData.firstNumber = '0'
    reset(starterData, flag);
    flag.firstNumber = false;

    input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
  })
}

export {
  acListener,
}
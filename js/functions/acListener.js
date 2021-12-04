import { btnAC, input } from '../buttons/buttons.js';
import { reset } from './reset.js';

const acListener = (starterData, flag) => {
  btnAC.addEventListener('click', () => {
    starterData.firstNumber = '0'
    flag.firstNumber = false;
    reset(starterData, flag);
    input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
  })
}

export {
  acListener,
}
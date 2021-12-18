import { btnNumber, input } from '../buttons/buttons.js';

const numberListener = (starterData, flag) => {
  for (const element of btnNumber) {
    element.addEventListener('click', () => {
      const firstNumber0 = starterData.firstNumber === '0'
      const secondNumber0 = starterData.secondNumber === '0'

      if (!flag.char) {
        flag.firstNumber = !firstNumber0
        starterData.firstNumber = firstNumber0 ? element.value : starterData.firstNumber + element.value
      } else {
        flag.secondNumber = !secondNumber0
        starterData.secondNumber = secondNumber0 ? element.value : starterData.secondNumber + element.value;
      }
      input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
    });
  }
}

export {
  numberListener,
}
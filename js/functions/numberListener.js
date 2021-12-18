import { btnNumber, input } from '../buttons/buttons.js';

const numberListener = (starterData, flag) => {
  for (const element of btnNumber) {
    element.addEventListener('click', () => {
      if (!flag.char && !flag.firstNumber) {
        flag.firstNumber = true;
        starterData.firstNumber = element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      } else if (!flag.char && flag.firstNumber) {
        flag.firstNumber = true;
        starterData.firstNumber += element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      } else if (flag.char && !flag.secondNumber) {
        flag.secondNumber = true;
        starterData.secondNumber = element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      } else if (flag.char && flag.secondNumber) {
        flag.secondNumber = true;
        starterData.secondNumber += element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      }
    });
  }
}

export {
  numberListener,
}
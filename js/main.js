import { input } from './buttons/buttons.js'
import { numberListener } from './functions/numberListener.js';
import { dotListener } from './functions/dotListener.js';
import { charListener } from './functions/charListener.js';
import { resultListener } from './functions/resultListener.js';
import { acListener } from './functions/acListener.js';

const starterData = {
  firstNumber: '0',
  secondNumber: '',
  char: '',
  result: '',
};

const flag = {
  firstNumber: false,
  secondNumber: false,
  char: false,
  dotFirstNumber: false,
  dotSecondNumber: false,
  result: false
};

input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;

numberListener(starterData, flag);
dotListener(starterData, flag);
charListener(starterData, flag);
resultListener(starterData, flag);
acListener(starterData, flag);

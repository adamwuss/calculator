import { btnResult } from '../buttons/buttons.js';
import { resultReturner } from './resultReturner.js';

const resultListener = (starterData, flag) => {
  btnResult.addEventListener('click', () => {
    resultReturner(starterData, flag);
  });
}

export {
  resultListener,
}

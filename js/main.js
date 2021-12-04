import { btnNumber, btnDecimal, input, btnChar, btnAC, btnResult } from './buttons/buttons.js'

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
}
input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;

const reset = () => {
  starterData.secondNumber = '';
  starterData.char = '';
  flag.dotFirstNumber = false;
  flag.dotSecondNumber = false;
  flag.secondNumber = false;
  flag.char = false;
  flag.result = false;
}

const numberListener = () => {
  for (const element of btnNumber) {
    element.addEventListener('click', () => {
      if (!flag.char && flag.firstNumber) {
        flag.firstNumber = true;
        starterData.firstNumber += element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      } else if (!flag.char && !flag.firstNumber) {
        flag.firstNumber = true;
        starterData.firstNumber = element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      } else if (flag.char && flag.secondNumber) {
        flag.secondNumber = true;
        starterData.secondNumber += element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      } else if (flag.char && !flag.secondNumber) {
        flag.secondNumber = true;
        starterData.secondNumber = element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      }
    });
  }
}

const dotListener = () => {
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

const charListener = () => {
  for (const element of btnChar) {
    element.addEventListener('click', () => {
      if (flag.firstNumber && !flag.secondNumber) {
        flag.char = true;
        starterData.char = element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      } else if (flag.firstNumber && flag.secondNumber) {
        resultReturner();
        flag.char = true;
        starterData.char = element.value;
        input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
      }
    });
  }
}

const resultReturner = () => {
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
    reset();
  }
}

const resultListener = () => {
  btnResult.addEventListener('click', () => {
    resultReturner();
  });
}

const acListener = () => {
  btnAC.addEventListener('click', () => {
    starterData.firstNumber = '0'
    flag.firstNumber = false;
    reset();
    input.value = `${starterData.firstNumber} ${starterData.char} ${starterData.secondNumber}`;
  })
}

numberListener();
dotListener();
charListener();
resultListener();
acListener();



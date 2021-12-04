const btnNumber = document.querySelectorAll('.number');
const btnChar = document.querySelectorAll('.char');
const btnResult = document.querySelector('.equal-sign');
const btnAC = document.querySelector('.all-clear');
const btnDecimal = document.querySelector('.decimal');
const input = document.querySelector('input');

let firstNumber = '0';
let secondNumber = '';
let char = '';
let result = '';

const flag = {
    firstNumber: false,
    secondNumber: false,
    char: false,
    dotFirstNumber: false,
    dotSecondNumber: false,
    result: false
}
input.value = `${firstNumber} ${char} ${secondNumber}`;

const reset = () => {
    secondNumber = '';
    char = '';
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
                firstNumber += element.value;
                input.value = `${firstNumber} ${char} ${secondNumber}`;
                console.log('First number:', firstNumber);
            } else if (!flag.char && !flag.firstNumber) {
                flag.firstNumber = true;
                firstNumber = element.value;
                input.value = `${firstNumber} ${char} ${secondNumber}`;
                console.log('First number:', firstNumber);
            } else if (flag.char && flag.secondNumber) {
                flag.secondNumber = true;
                secondNumber += element.value;
                input.value = `${firstNumber} ${char} ${secondNumber}`;
                console.log('Second number:', secondNumber);
            } else if (flag.char && !flag.secondNumber) {
                flag.secondNumber = true;
                secondNumber = element.value;
                input.value = `${firstNumber} ${char} ${secondNumber}`;
                console.log('Second number:', secondNumber);
            }
        });
    }
}

const dotListener = () => {
    btnDecimal.addEventListener('click', () => {
        if (!flag.char && !flag.dotFirstNumber) {
            firstNumber += btnDecimal.value;
            flag.firstNumber = true;
            flag.dotFirstNumber = true;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('First number:', firstNumber);
        } else if (flag.char && !flag.dotSecondNumber && flag.secondNumber) {
            secondNumber += btnDecimal.value;
            flag.secondNumber = true;
            flag.dotSecondNumber = true;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('Second number:', secondNumber);
        } else if (flag.char && !flag.dotSecondNumber && !flag.secondNumber) {
            secondNumber = '0';
            secondNumber += btnDecimal.value;
            flag.secondNumber = true;
            flag.dotSecondNumber = true;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('Second number:', secondNumber);
        }
    })
}

const charListener = () => {
    for (const element of btnChar) {
        element.addEventListener('click', () => {
            if (flag.firstNumber && !flag.secondNumber) {
                flag.char = true;
                char = element.value;
                input.value = `${firstNumber} ${char} ${secondNumber}`;
                console.log('Char:', char)
            } else if (flag.firstNumber && flag.secondNumber) {
                this.resultReturner();
                flag.char = true;
                char = element.value;
                input.value = `${firstNumber} ${char} ${secondNumber}`;
                console.log('Char:', char);
            }
        });
    }
}

const resultListener = () => {
    btnResult.addEventListener('click', () => {
        console.log('flag.firstNumber', flag.firstNumber)
        console.log('flag.char', flag.char)
        console.log('flag.secondNumber', flag.secondNumber)
        this.resultReturner = () => {
            if (flag.firstNumber && flag.char && flag.secondNumber) {
                switch (char) {
                    case '+':
                        result = Number(firstNumber) + Number(secondNumber);
                        break;
                    case '-':
                        result = Number(firstNumber) - Number(secondNumber);
                        break;
                    case '*':
                        result = Number(firstNumber) * Number(secondNumber);
                        break;
                    case '/':
                        if (flag.secondNumber) {
                            result = Number(firstNumber) / Number(secondNumber);
                            break;
                        } else {
                            result = 'Don\'t divide by 0';
                        }
                }
                flag.result = true;
                input.value = String(result);
                firstNumber = result;
                flag.firstNumber = true;
                reset();
                console.log('Result:', result)
            }
        }
        this.resultReturner();
    });
}

acListener = () => {
    btnAC.addEventListener('click', () => {
        firstNumber = '0'
        flag.firstNumber = false;
        reset();
        input.value = `${firstNumber} ${char} ${secondNumber}`;
        console.log('AC');
    })
}

numberListener();
dotListener();
charListener();
resultListener();
acListener();



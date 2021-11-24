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
    firstNumber = '0';
    secondNumber = '';
    char = '';
    flag.dotFirstNumber = false;
    flag.dotSecondNumber = false;
    flag.firstNumber = false;
    flag.secondNumber = false;
    flag.char = false;
    flag.result = false;
}

//listener for number
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

//listener for dot
btnDecimal.addEventListener('click', () => {

    if (!flag.char && !flag.dotFirstNumber) {
        firstNumber += btnDecimal.value;
        flag.dotFirstNumber = true;
        input.value = `${firstNumber} ${char} ${secondNumber}`;
        console.log('First number:', firstNumber);
    } else if (flag.char && !flag.dotSecondNumber && (flag.secondNumber)) {
        secondNumber += btnDecimal.value;
        flag.dotSecondNumber = true;
        input.value = `${firstNumber} ${char} ${secondNumber}`;
        console.log('Second number:', secondNumber);
    } else if (flag.char && !flag.dotSecondNumber && (!flag.secondNumber)) {
        secondNumber = '0';
        secondNumber += btnDecimal.value;
        flag.dotSecondNumber = true;
        input.value = `${firstNumber} ${char} ${secondNumber}`;
        console.log('Second number:', secondNumber);
    }
})

//listener for char
for (const element of btnChar) {
    element.addEventListener('click', () => {
        if ((firstNumber) && !flag.secondNumber) {
            flag.char = true;
            char = element.value;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('Char:', char)
        } else if (flag.result && !flag.secondNumber) {
            flag.char = true;
            firstNumber = result;
            char = element.value;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('Char:', char)
        }
    });
}

//listener for result
btnResult.addEventListener('click', () => {
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
        reset();
        console.log('Result:', result)
    }

});

//listener for AC
btnAC.addEventListener('click', () => {
    reset();
    input.value = `${firstNumber} ${char} ${secondNumber}`;
    console.log('AC');
})



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
let flagDotNum1 = false;
let flagDotNum2 = false;
input.value = `${firstNumber} ${char} ${secondNumber}`;

//listener for number
for (const element of btnNumber) {
    element.addEventListener('click', () => {

        //first number
        if ((char === '') && firstNumber !== '0') {
            firstNumber += element.value;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('First number:', firstNumber);
        } else if ((char === '') && firstNumber === '0') {
            firstNumber = element.value;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('First number:', firstNumber);
        } else if ((char !== '') && secondNumber !== '0') {
            secondNumber += element.value;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('Second number:', secondNumber);
        } else if ((char !== '') && secondNumber === '0') {
            secondNumber = element.value;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('Second number:', secondNumber);
        }

    });
}


//listener for dot
btnDecimal.addEventListener('click', () => {

    //first number
    if ((char === '') && (flagDotNum1 === false)) {
        firstNumber += btnDecimal.value;
        flagDotNum1 = true;
        input.value = `${firstNumber} ${char} ${secondNumber}`;
        console.log('First number:', firstNumber);
    } else if ((char !== '') && (flagDotNum2 === false) && (secondNumber !== '')) {
        secondNumber += btnDecimal.value;
        flagDotNum2 = true;
        input.value = `${firstNumber} ${char} ${secondNumber}`;
        console.log('Second number:', secondNumber);
    } else if ((char !== '') && (flagDotNum2 === false) && (secondNumber === '')) {
        secondNumber = '0';
        secondNumber += btnDecimal.value;
        flagDotNum2 = true;
        input.value = `${firstNumber} ${char} ${secondNumber}`;
        console.log('Second number:', secondNumber);
    }
})


//listener for char
for (const element of btnChar) {
    element.addEventListener('click', () => {
        if ((firstNumber) && (secondNumber === '')) {
            char = element.value;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('Char:', char)
        } else if ((result !== '') && (secondNumber === '')) {
            firstNumber = result;
            char = element.value;
            input.value = `${firstNumber} ${char} ${secondNumber}`;
            console.log('Char:', char)
        }
    });
}


//listener for result
btnResult.addEventListener('click', () => {
    if ((firstNumber !== '') && (char !== '') && (secondNumber !== '')) {
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
                if (secondNumber !== '0') {
                    result = Number(firstNumber) / Number(secondNumber);
                    break;
                } else {
                    result = 'Don\'t divide by 0';
                }
        }
        input.value = String(result);
        firstNumber = '';
        secondNumber = '';
        char = '';
        flagDotNum1 = false;
        flagDotNum2 = false;
        console.log('Result:', result)
    }

});


//listener for AC
btnAC.addEventListener('click', () => {
    firstNumber = '0';
    secondNumber = '';
    char = '';
    result = '';
    flagDotNum1 = false;
    flagDotNum2 = false;
    input.value = `${firstNumber} ${char} ${secondNumber}`;
    console.log('AC');
})



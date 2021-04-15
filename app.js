const numberDisplay = document.querySelector(".numberDisplay");
const currentValueDisplay = document.querySelector(".currentValueDisplay");
const btnPad = document.querySelector(".btnPad");
let currentOperand = numberDisplay.innerHTML;
let savedOperand = '';
let operator = '';
let typing = true;

btnPad.addEventListener('click', e => {
    switch (e.target.dataset.action) {
        case 'type':
            const digit = e.target.dataset.value;
            typingDigits(digit);
            break;

        case 'operate':
            operatorValue = e.target.dataset.value;
            operate(operatorValue);
            break;

        case 'b':
            backspace();
            break;

        case 'c':
            clear();
            break;

        case 'ce':
            clearAll();
            break;

        case 'equal':
            value = e.target.dataset.value;
            equalFunc(value);
            break;
    }

    currentValueDisplay.innerHTML = e.target.dataset.value;

});

const typingDigits = (digit) => {

    if (currentOperand.length == 13) {
        window.alert("This calculator can contains only 13 digits");
        return;
    }

    if (!typing) {
        numberDisplay.innerHTML = '0';
        typing = true;
    }

    numberDisplay.innerHTML += digit;
    numberDisplay.innerHTML = +(numberDisplay.innerHTML);  //  trim the leading 0 
    currentOperand = numberDisplay.innerHTML;
}

const operate = (operatorValue) => {
    typing = false;
    
    switch (operator) {
        case '':
            numberDisplay.innerHTML = currentOperand;
            break;

        case '+':
            // use parseInt and convert to integer for prevent string concatenation
            numberDisplay.innerHTML = parseInt(savedOperand) + parseInt(currentOperand);
            break;

        case '-':
            numberDisplay.innerHTML = savedOperand - currentOperand;
            break;

        case '*':
            numberDisplay.innerHTML = savedOperand * currentOperand;
            break;

        case '/':
            numberDisplay.innerHTML = savedOperand / currentOperand;
            break;
    }

    savedOperand = numberDisplay.innerHTML;
    operator = operatorValue;
}

const backspace = () => {
    if (currentOperand.length == '1') {
        numberDisplay.innerHTML = '0';
        return;
    }
    const number = currentOperand.slice(0, currentOperand.length - 1);
    numberDisplay.innerHTML = number;
    currentOperand = numberDisplay.innerHTML;
}

const clear = () => {
    numberDisplay.innerHTML = '0';
    currentValueDisplay.innerHTML = '0';
}

const clearAll = () => {
    clear();
    savedOperand = '';
    currentOperand = '';
    operator = '';
}

const equalFunc = (value) => {
    operate(value)
}
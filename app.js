const numberDisplay = document.querySelector(".numberDisplay");
const currentValueDisplay = document.querySelector(".currentValueDisplay");
const btnPad = document.querySelector(".btnPad");
let currentOperand = numberDisplay.innerHTML;
let savedOperand = '';

btnPad.addEventListener('click', e => {
    switch (e.target.getAttribute("data-action")) {
        case 'type':
            const digit = e.target.getAttribute("data-value");
            typingDigits(digit);
            break;

        case 'operate':
            const operator = e.target.getAttribute("data-value");
            operate(operator);
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
            
            break;
    }

})

const typingDigits = (digit) => {
    if (currentOperand.length == 13) {
        window.alert("This calculator can contains only 13 digits");
        return;
    }

    currentValueDisplay.innerHTML = digit;
    numberDisplay.innerHTML += digit;
    currentOperand = numberDisplay.innerHTML;
    numberDisplay.innerHTML = +currentOperand;  //  trim the leading 0 
}

const operate = (operator) => {
    savedOperand = currentOperand;
    numberDisplay.innerHTML = '0';
    currentOperand = '';

    if (operator == '+') {
        console.log(savedOperand, currentOperand);
    }
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

}
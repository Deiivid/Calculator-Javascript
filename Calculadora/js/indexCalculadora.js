const displayBeforeValue = document.getElementById('before-value');
const displayCurrentValue = document.getElementById('current-value');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');

const display = new Display(displayBeforeValue, displayCurrentValue);

btnNumbers.forEach(button => { 
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

btnOperators.forEach(button => {
    button.addEventListener('click', () => display.calculate(button.value))
});
const displayBeforeValue = document.getElementById('before-value');
const displayCurrentValue = document.getElementById('current-value');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');

const display = new Display(displayBeforeValue, displayCurrentValue);

btnNumbers.forEach(button => { //uso foreach con array funcion ya que quiero coger todos los que pu
    button.addEventListener('click', () => display.addNumber(button.innerHTML));//para acceder al valor dado como string del html 
});

btnOperators.forEach(button => {
    button.addEventListener('click', () => display.calculate(button.value))//para acceder al value del btn y luego ir a calculadora para ver que hace cada caso
});
class Display {
    constructor(displayBeforeValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayBeforeValue = displayBeforeValue;
        this.calculator = new Calculadora();//para realizar los calculos creo un nuevo objeto de calc
        
        this.typeOperation = undefined;//para mostrar y no los simbolos
        this.currentValue = ''; //valor vacio para quitar los numeros desde inicio
        this.beforeValue = '';
        this.signs = {
            sum: '+',
            divide: '/',
            multiply: '*',
            deduct: '-', 
        }
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValue();
    }

    deleteAll() {
        this.currentValue = '';
        this.beforeValue = '';
        this.typeOperation = undefined; 
        this.printValue();
    }

    calculate(tipo) {
        this.typeOperation !== 'same' && this.calculations(); 
        this.typeOperation = tipo;
        this.beforeValue = this.currentValue || this.beforeValue;
        this.currentValue = '';
        this.printValue();
    }

    addNumber(numero) {
        if(numero === '.' && this.currentValue.includes('.')) return //evitar repeticion de .... solo 1
        this.currentValue = this.currentValue.toString() + numero.toString(); //convierto valores a string 
        this.printValue();
    }

    printValue() {
        this.displayCurrentValue.textContent = this.currentValue; //TEXtcontent funciona con dom, nos devuelve valor que tiene
        this.displayBeforeValue.textContent = `${this.beforeValue} ${this.signs[this.typeOperation] || ''}`;//template string para interpolar variables
    }

    calculations() {
        const beforeValue = parseFloat(this.beforeValue);//paso a float los valores para mostrarlos
        const currentValue = parseFloat(this.currentValue);

        if( isNaN(currentValue)  || isNaN(beforeValue) ) return //si not a number entonces vacio
        this.currentValue = this.calculator[this.typeOperation](beforeValue, currentValue);
    }
}
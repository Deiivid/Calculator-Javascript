class Display {
    constructor(displayBeforeValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayBeforeValue = displayBeforeValue;
        this.calculator = new Calculadora();
        
        this.typeOperation = undefined;
        this.currentValue = ''; 
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
        if(numero === '.' && this.currentValue.includes('.')) return 
        this.currentValue = this.currentValue.toString() + numero.toString(); 
        this.printValue();
    }

    printValue() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayBeforeValue.textContent = `${this.beforeValue} ${this.signs[this.typeOperation] || ''}`;
    }

    calculations() {
        const beforeValue = parseFloat(this.beforeValue);
        const currentValue = parseFloat(this.currentValue);

        if( isNaN(currentValue)  || isNaN(beforeValue) ) return
        this.currentValue = this.calculator[this.typeOperation](beforeValue, currentValue);
    }
}
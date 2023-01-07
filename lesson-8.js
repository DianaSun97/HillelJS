//Task-1
"use strict";
let p = 0;
const triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function () {
        this.cSide = +prompt('Enter to cSide value: ');
        this.bSide = this.cSide;
        this.aSide = this.cSide;
        console.log(this.aSide, this.bSide, this.cSide);
    },
    getPerimetr: function () {
        p = this.aSide + this.bSide + this.cSide;
        console.log(p);
    },
    isEqualSides: function () {
        let res = this.aSide === this.bSide && this.bSide === this.cSide && this.aSide === this.cSide;
        console.log(res);
    }
};

triangle.setValues(); // 3 3 3
triangle.getPerimetr(); // 9
triangle.isEqualSides(); // true


//Task-2
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[',']']) // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply([''], ['undefined'.slice(1, 0), 'undefined'.slice(1, 0)]); // undefined

//Task-3
function createCalculator(initialValue) {
    let value = initialValue;

    return {
        add: function(num) {
            value += Number(num);
            return value;
        },
        sub: function(num) {
            value -= Number(num);
            return value;
        },
    };
}

const calculator = createCalculator(100);

console.log(calculator.add(10)); // 110
console.log(calculator.add(10)); // 120
console.log(calculator.sub(20)); // 100
console.log(calculator.add('qwe')); // NaN

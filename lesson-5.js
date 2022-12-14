
//Expected Result: (10, 'qwerty') => ['qwerty'...]
// function fillArray(size, str){
//     let array = num+str;
//     return array
// }
//
// let array = fillArray(10, 'qwerty')
// console.log(array)  // ['qwerty', 'qwerty', 'qwerty']


const fillArray = (arraySize, value) => {return new Array(arraySize).fill(value);}
let res = fillArray(10, 'qwerty')
console.log(res)  // ['qwerty', 'qwerty', 'qwerty']


const filterArray=(arr) => {return arr.filter((el) => el);}
let array = [0, 1, 2, null, undefined, 'qwerty', false];
let result = filterArray(array, false, undefined, '', 0, null);
console.log(result) // result - [1,2, 'qwerty'];

let result2 = filterArray(array, 0,1,2);
console.log(result2) // result - [null, undefined, 'qwerty', false];


function calcSum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(calcSum(0));
// expected output: 0

console.log(calcSum(1,2,3));
// expected output: 6

console.log(calcSum(5, 0, 10, 1, 5));
// expected output: 21


function createPipe() {
    return function (text) {
        return '====='+text+'====='
    }
}

const pipeFunction = createPipe();
console.log(pipeFunction('some text you like'));
// output: ===== 'some text you like' =====


function func2(a){
    alert(a)
}

function func3(a){
    console.log(a)
}
function  func1(str, fnc) {
    fnc(str)
}

// Option1
func1('some', func2 ); // func2('some')
func1('some2', func3 ); // func3('some2')
// Option2
func1('some', console.log );
func1('some', alert );
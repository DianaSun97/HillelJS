
//Task 1
let frameworks = ['AngularJS', 'jQuery']
//option 1
// frameworks = ['Backbone.js', ...frameworks]
//option 2
frameworks.unshift('Backbone.js');

//option 1
// frameworks = [...frameworks, ‘ReactJS’, ‘Vue.js’]
//option 2
frameworks.push('ReactJS', 'Vue.js');
frameworks.splice(1,0, 'CommonJS' );

const indexDelete = frameworks.indexOf('jQuery');
const jQ = frameworks[indexDelete]
frameworks.splice(indexDelete, 1)
console.log(frameworks, `${jQ} Это здесь лишнее`)


//Task 2
let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3, 0, 'value'];
// let result = removeNegativeElements([-9, -21, -12]); // []
// let result = removeNegativeElements(['-102', 102]); // ['-102', 102]

//Option1
// function removeNegativeElements(result) {
//     return result.filter(function(item) {
//         return typeof item === 'number' && item >= 0;
//     });
// }
//

//Option2
function removeNegativeElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] >= 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
 console.log(removeNegativeElements(result))


//Task1
//Option 1
let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
// let result = getStringElements(arr); // ['green', 'web']
// // function getStringElements(arr) {
// //     return arr.filter(element => typeof element === 'string');
// // }


//Option2
function getStringElements(arr) {
    let resultStr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            resultStr.push(arr[i]);
        }
    }
    return resultStr;
}

console.log(getStringElements(arr))


//Task3

//1.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = sumArray(array);

function sumArray(array) {
    if (array.length === 0) {
        return 0;
    }
    return array[0] + sumArray(array.slice(1));
}

console.log(sum); // 55

//2.
const arr1 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];
function sumElements(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const [first, ...rest] = arr;
    if (first === 10) {
        return first + sumElements(rest);
    }
    return sumElements(rest);
}

console.log(sumElements(arr1)); // 20

//3.
const arr2 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];
const elementsGreaterThanFive = findElementsGreaterThanFive(arr2);
function findElementsGreaterThanFive(arr) {
    let result = [];
    // Перебираем все элементы массива
    for (let i = 0; i < arr.length; i++) {
        // Если текущий элемент больше 5, то добавляем его в результирующий массив
        if (arr2[i] > 5) {
            result.push(arr2[i]);
        }
    }
    // Возвращаем результирующий массив
    return result;
}

console.log(elementsGreaterThanFive); // [7, 10, 6, 10]
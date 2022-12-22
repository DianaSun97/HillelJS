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

let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3, 0, 'value'];
// let result = removeNegativeElements([-9, -21, -12]); // []
// let result = removeNegativeElements(['-102', 102]); // ['-102', 102]

// function removeNegativeElements(result) {
//     return result.filter(function(item) {
//         return typeof item === 'number' && item >= 0;
//     });
// }
//
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
//
let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
// let result = getStringElements(arr); // ['green', 'web']
// // function getStringElements(arr) {
// //     return arr.filter(element => typeof element === 'string');
// // }

console.log(getStringElements(arr))

function getStringElements(arr) {
    let resultStr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            resultStr.push(arr[i]);
        }
    }
    return resultStr;
}



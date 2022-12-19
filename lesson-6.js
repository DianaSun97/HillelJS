let arr = [];
let arrSize = 15;
let min = 0;
let max = 20;


//==== Task 1 ====//
function getRandomInRange(min, max) {
    return Math.floor(min + (max-min) * Math.random());
}

for(let i=0; i<arrSize; i++){
    let value = getRandomInRange(min, max);
    arr.push(value);
}
console.log ("Basic;",arr);


//==== Task 2 ====//
// function getDeleteRange(arr){
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%3===0) {
//             // const value = arr[i];
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log (getDeleteRange(arr));

const result = arr.filter(value => value%3===0);
console.log (result);

//==== Task 3 ====//
let found = arr.find(n => n > 7);
 if (found === undefined) {
    console.log("no found")
}
 else {
     console.log( "Your found", found)
 }

//==== Task 4 ====//
const squares = arr.map(n => n * 2);
console.log("Your squares",squares);

let sum = 0;
//Option 1
arr.filter(n => n % 2 === 0).forEach((n) => { sum += n });
console.log ("Your result (option 1):", sum);

//Option 2
let sum3 = arr.filter(n => n % 2 === 0).reduce((sum2, n) => sum2 + n, 0);
// let sum3 = arr.filter(n => n % 2 === 0).reduce(function (sum2, n) { return sum2 + n}, 0);
console.log ("Your result (option 2):", sum3);


//==== Task 5 ====//
const copyArr = [...arr];

const firstArr = copyArr.shift();
console.log(firstArr);


const lastArr = copyArr.pop();
console.log(lastArr );
console.log("Last and First:" , copyArr);


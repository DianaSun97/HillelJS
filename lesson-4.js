
let arr = ['455', 87.15, true, undefined, 7, null, 'false', [], {}];

// console.log(typeof arr[0]); // '455'
// console.log(typeof arr[1]+3); // 87.15
// console.log(typeof  arr[2] ); // true
// console.log(typeof  arr[3] ); // undefined
// console.log(typeof  arr[4]+ 3 ); // 7
// console.log(typeof arr[5] ); // null
// console.log(typeof arr[6] ); // 'false'
// console.log(typeof  arr[7] ); // []
// console.log(typeof  arr[8] ); // {}


for (let i = 0; i < arr.length; i++) {
    const typ = typeof arr[i];
    if (typ === 'number') {
        console.log(arr[i]+3);
    } else {
        console.log(typ);
    }
}

let array = [];
let count=parseInt(prompt("Введи количество чисел"));
for ( let i=0; i<count; i++) {
    let num = Math.floor(Math.random()*10) ;
    array.push(num);
}
console.log(array)

//Option 1 (Push copy)
// let array2 =  [];
// for (let i of array) {
//     array2.push(i);
// }

//Option 2 (assign copy)
let array2 =  Object.assign([], array);
console.log(array2);
for (let i = 0; i < array2.length; i++) {
    if( i%3===2 ) {
        array2[i] = array2[i]*3
    }
}
console.log(array2);


const student1 = {
    firstName: 'John',
    lastName: 'Smith',
    mark: 100,
};

console.log(student1);
console.log({...student1});
//Spread
// console.log(...arr);
// console.log([...arr]);
// console.log([11, 12, ...arr, 21, 22]);
// console.log({...student1});
const student2 = {...student1, mark: 80};
console.log(student1 /* for debug */, student2)


let student3 = Object.assign({}, student1);
console.log(student3);
student3.mark = 89;
console.log(student3);

let marks = [student1.mark, student2.mark, student3.mark];
let sum =0;
for ( let i = 0 ; i < marks.length; i++ ){
    sum += marks[i]
}
console.log(sum/marks.length)

// console.log('Keys ===>', Object.keys(student1));

for (let key of Object.keys(student1)) {
    console.log(key, '-', student1[key]);
}
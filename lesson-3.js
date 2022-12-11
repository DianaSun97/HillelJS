let name = prompt('Your name?');

for (let i=0; i<4; i++){
    if (i === 2)  {
        console.log(i+`: Happy birthday, dear ${name}`);
    } else {
        console.log(i+"Happy birthday to you");
    }
}
// function myString(){
let str=".#";
let char="";
let prom = +prompt('Enter any number');
for (let i=0; i<prom; i++){
    char += str;
}
console.log(char)
 // }

//Option 1
// while (prompt('Enter any number')) { // incorrect
//     if (prom === null || isNaN(prom)) {
//         alert('Invalid. You should enter a number');
//         continue;
//     }
//     break;
// }

//Option 2
// while (true) {
//     prom = prompt('Enter any number');
//     if (prom === null || isNaN(prom)) {
//         alert('Invalid. You should enter a number');
//         continue;
//     }
//     break;
// }


//Option 3
while (true) {
    prom = prompt('Enter any number');
    if (prom !== null && !isNaN(prom)) {
        break;
    }
    alert('Invalid. You should enter a number');
}

let sum = 0;
for (let i=0; i<prom; i++){
    if(i % 2 === 1) sum+=i;
}
console.log(sum)


//Option 1
let s=0;
while (true) {
    let ram = Math.random();
    s++;
    if (ram > 0.7) {
        console.log(`Loop was finished because of: ${ram}, Number of iterations: ${s}`);
        break;
    }
}

//Option 2
// for (let i = 0; true; i++) {
//     let ram = Math.random();
//     if (ram > 0.7) {
//         console.log(`Loop was finished because of: ${ram}, Number of iterations: ${i}`);
//         break;
//     }
// }

for (let i = 1; i <= 50; i++) {
    if ((i % 15)===0){
        console.log('Div by 5 and 3')
    } else if ((i % 3) === 0) {
        console.log('Div by 3');
    } else if ((i % 5) === 0) {
        console.log('Div by 5');
    } else {
        console.log(i)
    }
}


// new obj`Date`
var today = new Date();
var now = today.toLocaleString();
console.log(now);
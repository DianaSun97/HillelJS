let name = +prompt('Your name?');

for (let i=0; i<4; i++){
    if (i === 2)  {
        console.log(i+`: Happy birthday, dear ${name}`);
    } else {
        console.log(i+"Happy birthday to you");
    }
}
function myString(){
let str=".#";
let char=""
let prom = +prompt('Enter any number');
for (let i=0; i<prom; i++){
    char += str;
}
console.log(char)
 }
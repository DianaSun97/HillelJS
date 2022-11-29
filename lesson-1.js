// Option-1
let numberType = 123456;
let stringType = 'IT School \'Hillel\'';
let boolType=false;


console.log('value:',numberType,'type:',typeof numberType);
// expected output: "number"

console.log('value:',stringType,'type:',typeof stringType);
// expected output: "string"

console.log(boolType,typeof boolType);
// expected output: "boolean"

//Option-2 (function)
//DRY I don't  repeat a code, but for this need to array and loop.
function types(value) {
    console.log('value:',value,'type:',typeof value);
}
types(numberType);
types(stringType);
types(boolType);

function myFunction() {
    alert('IT School \'Hillel\'');
}
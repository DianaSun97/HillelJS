
//==== Number ====//
function myFunction() {
    const str = prompt("Your number");
    const int = Number.parseInt(str);
    // console.log(typeof int);
    console.log(`Hexadecimal: ${int.toString(16)}\nbinary: ${int.toString(2)}`);
    const operations = 2;
    const plus = int + operations;
    const minus = int - operations;
    const mult = int * operations;
    const del = int / operations;
    console.log(plus, minus, mult, del);
    console.log(str.length);


    const float=(0.51000002).toFixed(2); // 0.51
    const num = Number.parseFloat(float);
    console.log((num+operations));
}

//==== String ====//
function myString() {
    const str = 'the quick brown fox jumps over the lazy dogs back';
    const str_two = 'brown fox jumps';
    console.log(str.indexOf(str_two),str_two.toUpperCase());
}

//==== Bool ====//
function myBool() {
    const a = 1;
    const b = 2;
    const c = 3;
    const d = 3;
    const result = (a > b) || (b < c) || (c < d);
    console.log(result); //true
    const result2 = (a == b) || (b == c) || (c == d);
    console.log(result2); //true

    const result3 = (a < b) && (b < c) && (c == d);
    console.log(result3); //true

    const result4 = (a != b) && (b != c) && (c == d);
    console.log(result4); //true

}

myString();
myBool();
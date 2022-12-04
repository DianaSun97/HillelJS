
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


    //==== Additional task ====//
    const x = null;
    const y = undefined;
    const result5 = (x == y);
    const result6 = (x === y);
    console.log(result5, result6);

    //==== Additional task ====//
    const p = null;
    const m = 1;
    const k = 2;
    const result7 = (p ?? m); // 1
    const result8 = (m ?? p); // 1
    const result9 = (k ?? m); // 2
    console.log(result7, result8, result9);
}

myString();
myBool();
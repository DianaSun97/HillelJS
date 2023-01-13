
let elem = document.getElementsByClassName('divs') 
let selected = document.getElementById('blockSelect'); 
let body = document.querySelector('body');
let input = document.querySelector('.input');
let inputButton = document.querySelector('.inputButton');



for (let key of elem) {
    key.addEventListener('click', (e) => {
        e.stopPropagation();
        // console.log(key, e);
        const res = key.getAttribute("div-name");

        if (res === null) { // если пустой
            selected.textContent = `Selected: XXXXXX`;
        } else { // иначе
            selected.textContent = `Selected: ${res}`;
        }
    })
}

const handler = (event) => { 
    let handler = event.target.getAttribute("div-name");
    selected.textContent = `Selected:${handler}`;
}

body.addEventListener('click', () => {
    selected.textContent = `Selected: `;
})


const keyPress = (event) => {
    if (event.key === event.key.toUpperCase()) {
        event.preventDefault();
    }
}

inputButton.disabled = true; 

inputButton.addEventListener('click', () => {
    let resInput = input.value;
    alert(resInput);
})

input.addEventListener('keyup' , () => {
    if (input.value !== '') {
        inputButton.disabled = false;
    } else {
        inputButton.disabled = true;
    }
})

console.log(input)
console.log(inputButton);
console.log(body)
console.log(selected);
console.log(elem); 
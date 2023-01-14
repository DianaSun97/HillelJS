
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

        if (res === null) {
            selected.textContent = `Selected: XXXXXX`;
        } else {
            selected.textContent = `Selected: ${res}`;
        }
    })
}

const handler = (e) => {
    e.stopPropagation();
    let res = e.target.getAttribute("div-name");
    selected.textContent = `Selected: ${res}`;
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
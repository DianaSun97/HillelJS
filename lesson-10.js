const elems = document.getElementsByClassName('divs');
const selected = document.getElementById('block__choise');
const body = document.querySelector('body');
const input = document.querySelector('.input');
const inputBtn = document.querySelector('.input__btn');

for (let key of elems) {
    key.addEventListener('click', (e) => {
        e.stopPropagation();
        const res = e.target.getAttribute("div-name");

        if (res === null) {
            selected.textContent = `Selected: XXXXXX`;
        } else {
            selected.textContent = `Selected: ${res}`;
        }
    });
}

body.addEventListener('click', () => {
    selected.textContent = `Selected: XXXXXX`;
});

inputBtn.addEventListener('click', () => {
    let resInput = input.value;
    alert(resInput);
});

input.addEventListener('input' , () => {
    inputBtn.disabled = !input.value;
});


console.log(input);
console.log(inputBtn);
console.log(body);
console.log(selected);
console.log(elems);


const input = document.getElementById('input');
const addButton = document.getElementById('add-button');
const clearButton = document.getElementById('clear-button');
const output = document.getElementById('output');
const error = document.getElementById('error');

addButton.addEventListener('click', function() {
    if (input.value.trim() === '') {
        error.style.display = 'block';
        return;
    }
    error.style.display = 'none';
    output.textContent = input.value;
});

clearButton.addEventListener('click', function() {
    input.value = '';
    output.textContent = '';
});
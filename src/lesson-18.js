import './style.css'

//html
const bodySpace = document.getElementsByTagName('body');
let selected = document.querySelector('.selected');
const personagesTable = document.getElementById('personages-list');
let divs = document.createElement("div");
let back = document.querySelector('.back');
divs.classList.add('selectedBlock');

// bodySpace[0].addEventListener('click', () => {
//     selected.textContent = '';
// });


function handleName(event) {
    const div = event.target;
    console.log(div)
    let name = div.getAttribute('div-name');
    if (name === null) {
        name = div.parentElement.getAttribute('div-name');
        selected.textContent = `Selected: ${name}`;
    } else {
        selected.textContent = `Selected: ${name}`;
    }
    event.stopPropagation();
}



//delete
function handleDelete(event) {
    event.stopPropagation();
    const buttons = event.target;
    const div = buttons.parentElement;
    div.remove()
}


function personagesList(data) {
    console.log(data)
    data.forEach(val => {
        let div = document.createElement('div');

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let buttons = document.createElement('button');

        div1.innerText = 'id: ' + val.id;
        div2.innerText = 'name: ' + val.name;
        div3.innerText = 'status: ' + val.status;

        buttons.onclick = handleDelete;
        div.onclick = handleName;
        div.setAttribute('div-name', val.name);
        div.classList.add('divItem');

        buttons.innerHTML = 'delete';
        buttons.setAttribute('btn-name', 'delete');

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(buttons);


        personagesTable.appendChild(div);
    });
}

//back
back.addEventListener('click', (e) => {
    e.stopPropagation()
    // location.reload()
    document.querySelectorAll('.divItem').forEach(value => {
        value.remove()
    })

    personagesList(response.results);
});


//pagination
const counter = document.getElementById("counter");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

let currentPage = 1;
let characters = [];

const updateCharactersList = (page) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res => res.json())
        .then(data => {
            characters = data.results;

            personagesList(characters);
            counter.innerHTML = currentPage;
        })
        .catch(err => console.error(err));
};

updateCharactersList(currentPage);

leftButton.addEventListener("click", (e) => {
    if (currentPage > 1) {
        currentPage--;
        document.querySelectorAll('.divItem').forEach(value => {
            value.remove()
        })
        updateCharactersList(currentPage);
    }
    e.stopPropagation()
});

rightButton.addEventListener("click", (e) => {
    currentPage++;
    document.querySelectorAll('.divItem').forEach(value => {
        value.remove()
    })
    updateCharactersList(currentPage);
    e.stopPropagation()

});







//html
const bodySpace = document.getElementsByTagName('body');
let selected = document.querySelector('.selected');
const personagesTable = document.getElementById('personages-list');
let divs = document.createElement("div");
let back = document.querySelector('.back');
divs.classList.add('selectedBlock');

bodySpace[0].addEventListener('click', () => {
    selected.textContent = '';
});


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

const response = JSON.parse(Data);
personagesList(response.results);

//back
back.addEventListener('click', (e) => {
    e.stopPropagation()
    // location.reload()
    document.querySelectorAll('.divItem').forEach(value => {
        value.remove()
    })

    personagesList(response.results);
});


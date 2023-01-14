console.log(Data);
const results = JSON.parse(Data);
console.log(results);
console.log(results.results);

//html
let selected = document.querySelector('.selected');
let buttons = document.getElementsByClassName('button');
let buttonDelete = document.getElementsByClassName('buttonDelete');
let selectedMain = document.querySelector('.selectedMain');
let divs = document.createElement("div");
let back = document.querySelector('.back');
divs.classList.add('selectedBlock');


let objects = [...Object.values(results.results)]

let res = {
    id: '',
    name: '',
    status: ''
};

objects.find(index => {
    if (index.id === 1 && index.name === 'Rick Sanchez' && index.status === 'Alive') {
        res.id = index.id;
        res.name = index.name;
        res.status = index.status;
    }
})


for (let key of buttons) {
    key.addEventListener('click', (e) => {
        let resAttribute = e.target.getAttribute('btn-name');

        if (resAttribute === null) {
            selected.textContent = 'Selected: - - - - -';
        } else {
            selected.textContent = `Selected: ${res[resAttribute]}`;
        }
    })
}

const selectedDelete = {
    delete: (element) => {
        element.remove();
    }
}

for (let i of buttonDelete) {
    i.addEventListener('click', (e) => {
        let listResult = e.target;
        let record = listResult.getAttribute('btn-name');
        if (record in selectedDelete) {
            console.log(selectedDelete[record](listResult.parentElement));
        }
    })
}

function deletes(e) {
    let listResult = e.target;
    let record = listResult.getAttribute('btn-name');
    if (record in listResult) {
        console.log(listResult[record](listResult.parentElement));
    }
}
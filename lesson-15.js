async function search() {
    const name = document.querySelector("#name").value;
    const status = document.querySelector("input[name='status']:checked").value;
    const url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`;
    const response = await fetch(url);
    const data = await response.json();

    let results = "";
    data.results.forEach(character => {
        results += `<p class="card" data-name="${character.name}" data-image="${character.image}">Name: ${character.name}<br>Status: ${character.status}</p><br>`;
    });
    document.querySelector("#results").innerHTML = results;

    const cards = document.getElementsByClassName('card');
    console.log(cards);
    for (const card of cards) {
        card.addEventListener('click', (e) => {
            const image = e.target.getAttribute('data-image');
            const name = e.target.getAttribute('data-name');
            openModal(image, name);
        });
    }
}

function openModal(image, name) {
    const modal = document.getElementById('modal');
    modal.style.display = 'inline-block';

    const modalImage = document.getElementById('modal-image');
    modalImage.src = image;

    const modalName = document.getElementById('modal-name');
    modalName.innerText = name;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

const modalCloseButton = document.getElementById('modal-close');
modalCloseButton.addEventListener('click', closeModal);

const modal = document.getElementById('modal');
modal.addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

function clearMessage() {
    nameInput.value = ''
    messageP.innerText = ''
}

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}

nameInput.onkeydown = (event) => {
    if(event.key === 'Escape'){
        clearMessage();
    }
}

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}
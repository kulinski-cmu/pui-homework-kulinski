import threadColorsByName from './threadColors.js';



class Thread{
    constructor(name, hex, number) {
        this.name = name;
        this.hex = hex;
        this.number = number;
        
        this.element = null;
    }
}

let addNewColorButton = document.querySelector('#new-color-button');

const myPopup = new Popup ({
    id : "color-add",
    title : "Choose a New Color to Add",
    content : `
    {btn-enter}[enter a color name]`,
});

function onClickAddNewColor(){
    myPopup.show();
}

const colors = []; 

function createColor(thread) {
    const template = document.querySelector('.color-option');
    const clone = template.textContent.cloneNode(true);
    thread.element = clone.querySelector('.thread-element');

    const threadList = document.querySelector('.thread-list');
    threadList.prepend(thred.element);
    let name = thread.element.querySelector('#name');
    let number = thread.element.querySelector('#number');
    let color = thread.element.querySelector('#color-square');

        name.innerText = colors[i];
        number.innerText =threadColorsByName[colors[i]].number;
        color.style.color = threadColorsByName[colors[i]].hex;
}

addNewColorButton.addEventListener('click', onClickAddNewColor);
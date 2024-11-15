import threadColorsByName from './threadColors.js';



class Thread{
    constructor(name, hex, number) {
        this.name = name;
        this.hex = hex;
        this.number = number;
        
        this.element = null;
    }
}

const colors = ["Cocoa- Very Dark", "Green", "Pistachio Green - Very Dark", "Cream", "Topaz - Dark", "Coffee Brown - Dark", "Avocado Green - Dark"]; 

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
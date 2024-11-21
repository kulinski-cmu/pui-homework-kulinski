import threadColorsByName from './threadColors.js';

class Thread{
    constructor(name) {
        this.name = name;
        //this.hex = hex;
        //this.number = number;
        
        this.element = null;
    }
}

let addNewColorButton = document.querySelector('#new-color-button');
const colors = []; 
let currentColor = 'test';
const userInput = 'Cocoa - Very Dark';



const popup = new Popup ({
    id : "color-add",
    title : "Choose a New Color to Add",
    content : `
     {btn-search}[Search]{btn-enter}[Add]`,

    

    loadCallback: () => {
        document.querySelector(".popup.color-add button.enter").addEventListener("click", () => {
            colors.push(currentColor);
            console.log(colors);
        });
        
        document.querySelector(".popup.color-add button.search").addEventListener("click", () => {
            console.log(threadColorsByName[userInput].number);
       });
    },
});


function onClickAddNewColor(){
    popup.show();
}



function createColor(thread) {
    const template = document.querySelector('#color-template');
    const clone = template.content.cloneNode(true);
    thread.element = clone.querySelector('.color-option');

    const threadList = document.querySelector('.color-list');
    threadList.append(thread.element);
    let name = thread.element.querySelector('#name');
    let number = thread.element.querySelector('#number');
    let color = thread.element.querySelector('.color-square');

        name.innerText = thread.name;
        number.innerText =threadColorsByName[thread.name].number;
        color.style.backgroundColor = threadColorsByName[thread.name].hex;
}


addNewColorButton.addEventListener('click', onClickAddNewColor);
colors[0] = new Thread('Cocoa - Very Dark');
colors[1] = new Thread("Tender Green - Very Light");
createColor(colors[0]);
createColor(colors[1]);
import threadColorsByName from './threadColors.js';

class Thread{
    constructor(name) {
        this.name = name;
    
        this.element = null;
    }
}

class Square{
    constructor(){
        this.element = null;
    }
}

class Div{
    constructor(){
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

    thread.element.addEventListener('click', () => {
        currentColor = thread.element.querySelector('#name');
    });
}

function createGridCols(){
    const template = document.querySelector('#pattern-template');
    const clone = template.content.cloneNode(true);
    const square = new Square();
    square.element = clone.querySelector('.square');

        document.querySelector('#square-div').append(square.element);
    

    square.element.addEventListener('click', () => {
        square.element.style.backgroundColor = threadColorsByName[currentColor.innerText].hex;
    });
}

function createGridRows(){
    const template = document.querySelector('#row-template');
    const clone = template.content.cloneNode(true);
    const div = new Div();
    div.element = clone.querySelector('#square-div');

    document.querySelector('#right-of-page').append(div.element);
}

let clickIncreaseRows = document.querySelector('#upRows');
let clickDecreaseRows = document.querySelector("#downRows");
let clickIncreaseCols = document.querySelector("#upCols");
let clickDecreaseCols = document.querySelector('#downCols');

let rowsAmount = document.querySelector("#numberRow");
let colsAmount = document.querySelector("#numberCols");

function onChangeRowsUp(){
    let rowsNum = parseInt(rowsAmount.innerText);
    rowsNum++;
    rowsAmount.innerText =rowsNum;
}

function onChangeRowsDown(){
    let rowsNum = parseInt(rowsAmount.innerText);
    rowsNum--;
    rowsAmount.innerText =rowsNum;
}

function onChangeColsUp(){
    let colsNum = parseInt(colsAmount.innerText);
    colsNum++;
    colsAmount.innerText =colsNum;
    createGridCols();
}

function onChangeColsDown(){
    let colsNum = parseInt(colsAmount.innerText);
    colsNum--;
    colsAmount.innerText =colsNum;
}



addNewColorButton.addEventListener('click', onClickAddNewColor);
clickIncreaseRows.addEventListener('click', onChangeRowsUp);
clickDecreaseRows.addEventListener('click', onChangeRowsDown);
clickIncreaseCols.addEventListener('click', onChangeColsUp);
clickDecreaseCols.addEventListener('click', onChangeColsDown);

colors[0] = new Thread('Cocoa - Very Dark');
colors[1] = new Thread("Tender Green - Very Light");
for(let i = 0; i < parseInt(rowsAmount.innerText); i++){
    createGridRows();
}
for(let i = 0; i < parseInt(colsAmount.innerText); i++){
    createGridCols(); 
}
createColor(colors[0]);
createColor(colors[1]);
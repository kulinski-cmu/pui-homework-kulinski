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

function createGrid(){
    const template = document.querySelector('#pattern-template');
    const clone = template.content.cloneNode(true);
    const square = new Square();
    square.element = clone.querySelector('.square');

    document.querySelector('#square-div').appendChild(square.element);
    

    square.element.addEventListener('click', () => {
        square.element.style.backgroundColor = threadColorsByName[currentColor.innerText].hex;
    });
}

let clickIncreaseRows = document.querySelector('#upRows');
let clickDecreaseRows = document.querySelector("#downRows");
let clickIncreaseCols = document.querySelector("#upCols");
let clickDecreaseCols = document.querySelector('#downCols');

let rowsAmount = document.querySelector("#numberRow");
let colsAmount = document.querySelector("#numberCols");

const gridBox = document.querySelector('#square-div');
gridBox.style.width = '960px';
let currentWidth = 960;

gridBox.style.height = '480px';
let currentHeight = 480;

function onChangeRowsUp(){
    let rowsNum = parseInt(rowsAmount.innerText);
    rowsNum++;
    rowsAmount.innerText =rowsNum;

    currentHeight = currentHeight + 24;
    gridBox.style.height = currentHeight + 'px';
    for(let i = 0; i < parseInt(colsAmount.innerText); i++){
        createGrid();
    }
}

function onChangeRowsDown(){
    if(parseInt(rowsAmount.innerText) > 0){
        let rowsNum = parseInt(rowsAmount.innerText);
        rowsNum--;
        rowsAmount.innerText =rowsNum;

        currentHeight = currentHeight - 24;
        gridBox.style.height = currentHeight + 'px';
        for(let i = 0; i < parseInt(colsAmount.innerText); i++){
            document.querySelector('#square-div').removeChild(document.querySelector('.square'));
        }
    }
}

function onChangeColsUp(){
    let colsNum = parseInt(colsAmount.innerText);
    colsNum++;
    colsAmount.innerText =colsNum;    

    currentWidth = currentWidth + 24;
    gridBox.style.width = currentWidth + 'px';
    for(let i = 0; i < parseInt(rowsAmount.innerText); i++){
        createGrid();
    }
}

function onChangeColsDown(){
    if(parseInt(colsAmount.innerText) > 0){
        let colsNum = parseInt(colsAmount.innerText);
        colsNum--;
        colsAmount.innerText =colsNum;

        currentWidth = currentWidth - 24;
        gridBox.style.width = currentWidth + 'px';
        for(let i = 0; i < parseInt(rowsAmount.innerText); i++){
            document.querySelector('#square-div').removeChild(document.querySelector('.square'));
        }
    }
}

function removeWholeGrid(){
    for(let i = 0; i < parseInt(rowsAmount.innerText) * parseInt(colsAmount.innerText); i++){
        document.querySelector('#square-div').removeChild(document.querySelector('.square'));
    }
}

let fileList = null;

async function usePhoto() {
    fileList = this.files;
    const photoURL = URL.createObjectURL(fileList[0]);
    
    let img = new Image();
    img.src = photoURL;
    await img.decode();
    let imgWidth = img.width;
    let imgHeight = img.height;

    let imgRowsNum = Math.floor(imgWidth/24);
    let imgColsNum = Math.floor(imgHeight/24);
    removeWholeGrid();

    colsAmount.innerText = imgColsNum;
    rowsAmount.innerText = imgRowsNum;
    gridBox.style.width = (imgRowsNum * 24) + 'px';
    gridBox.style.height = (imgColsNum * 24) + 'px';

    for(let i = 0; i < parseInt(colsAmount.innerText) * parseInt(rowsAmount.innerText); i++){
        createGrid(); 
    }
    gridBox.style.backgroundImage = "url('" + photoURL + "')";
}

const fileInput = document.querySelector('#upload-button');

fileInput.addEventListener('change', usePhoto);



addNewColorButton.addEventListener('click', onClickAddNewColor);
clickIncreaseRows.addEventListener('click', onChangeRowsUp);
clickDecreaseRows.addEventListener('click', onChangeRowsDown);
clickIncreaseCols.addEventListener('click', onChangeColsUp);
clickDecreaseCols.addEventListener('click', onChangeColsDown);

colors[0] = new Thread('Cocoa - Very Dark');
colors[1] = new Thread("Tender Green - Very Light");
if (fileList === null) {
for(let i = 0; i < parseInt(colsAmount.innerText) * parseInt(rowsAmount.innerText); i++){
    createGrid(); 
}
}
createColor(colors[0]);
createColor(colors[1]);
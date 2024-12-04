import threadColorsByName from './threadColors.js';
import Swal from '../node_modules/sweetalert2/src/sweetalert2.js';
import autoComplete from "../node_modules/@tarekraafat/autocomplete.js/src/autoComplete.js";
//import { jsPDF } from "../node_modules/jspdf/dist/jspdf.node.js";

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
let currentColor;

const autoCompleteJS = new autoComplete({
   
    placeHolder : "Add New Thread Color",
    data : {
        src: Object.keys(threadColorsByName),
        cache: true,
    },
    resultsList : {
        element: (list, data) => {
            if(!data.results.length) {
                const message = document.createElement('div');
                message.setAttribute("class", "no_result");
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                list.prepend(message);
            }
        },
        noResults: true,
        maxResults: 30,
    },
    resultItem : {
        highlight : true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
                onClickAddNewColor(selection);
            }
        }
    }
});

const hexNum = {
    "0" : 0,
    "1" : 1,
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "A" : 10,
    "B" : 11,
    "C" : 12,
    "D" : 13,
    "E" : 14,
    "F" : 15,
};

let rgbaValue;
function getRGB(threadName){
    let R = threadColorsByName[threadName].hex.charAt(1) + threadColorsByName[threadName].hex.charAt(2);
    let G = threadColorsByName[threadName].hex.charAt(3) + threadColorsByName[threadName].hex.charAt(4);
    let B = threadColorsByName[threadName].hex.charAt(5) + threadColorsByName[threadName].hex.charAt(6);
    let RNum = (16 * hexNum[R.charAt(0)]) + hexNum[R.charAt(1)];
    let GNum = (16 * hexNum[G.charAt(0)]) + hexNum[G.charAt(1)];
    let BNum = (16 * hexNum[B.charAt(0)]) + hexNum[B.charAt(1)];
    rgbaValue = "rgba(" + RNum + "," + GNum + "," + BNum + ",1.0)";
    console.log(rgbaValue);
}


function onClickAddNewColor(colorName){
    getRGB(colorName);
    Swal.fire({ 
        title: "Add " + colorName + "?",
        showCancelButton: true,
        confirmButtonText: "Add",
        backdrop: `${rgbaValue}`,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
            colors.push((colorName));
            const newThread = new Thread(colorName);
            createColor(newThread);
        }
      });
}



let colorBoxSize = 608;
function createColor(thread) {
    const template = document.querySelector('#color-template');
    const clone = template.content.cloneNode(true);
    thread.element = clone.querySelector('.color-option');

    const threadList = document.querySelector('.color-list');
    const colorBox = document.querySelector('#add-new-color');
    if(colors.length > 6) {
        colorBoxSize = colorBoxSize + 68;
        colorBox.style.height = colorBoxSize + 'px';
    }
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

function onClickNewPattern(){
    window.alert("Are you sure you want to make a new pattern?");
    location.replace(location.href);
}

const fileInput = document.querySelector('#upload-button');

fileInput.addEventListener('change', usePhoto);


clickIncreaseRows.addEventListener('click', onChangeRowsUp);
clickDecreaseRows.addEventListener('click', onChangeRowsDown);
clickIncreaseCols.addEventListener('click', onChangeColsUp);
clickDecreaseCols.addEventListener('click', onChangeColsDown);

if (fileList === null) {
for(let i = 0; i < parseInt(colsAmount.innerText) * parseInt(rowsAmount.innerText); i++){
    createGrid(); 
}
}

const newPattern = document.querySelector('#new-pattern');
newPattern.addEventListener('click', onClickNewPattern);
const learn = document.querySelector('#learn-button');
learn.addEventListener('click', onClickLearn);
function onClickLearn(){
    window.alert("You are being taken to a new page.");
}
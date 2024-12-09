console.log('test0');
import threadColorsByName from './threadColors.js';
console.log('test1');
import Swal from "./node_modules/sweetalert2/src/sweetalert2.js";
console.log('test2'
);
import autoComplete from "./node_modules/@tarekraafat/autocomplete.js/src/autoComplete.js";
console.log('test3');


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


const colors = []; 
let currentColor;
/**
 * This activates and shows the autocomplete function when searching for a new thread color
 */
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

//connection between hex value and decimal number
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

/**
 * This function changes the hex value of the color into a rgb value
 * @param threadName the name of the color
 */
let rgbaValue;
function getRGB(threadName){
    let R = threadColorsByName[threadName].hex.charAt(1) + threadColorsByName[threadName].hex.charAt(2);
    let G = threadColorsByName[threadName].hex.charAt(3) + threadColorsByName[threadName].hex.charAt(4);
    let B = threadColorsByName[threadName].hex.charAt(5) + threadColorsByName[threadName].hex.charAt(6);
    let RNum = (16 * hexNum[R.charAt(0)]) + hexNum[R.charAt(1)];
    let GNum = (16 * hexNum[G.charAt(0)]) + hexNum[G.charAt(1)];
    let BNum = (16 * hexNum[B.charAt(0)]) + hexNum[B.charAt(1)];
    rgbaValue = "rgba(" + RNum + "," + GNum + "," + BNum + ",1.0)";
}

/**
 * This function shows the popup when you select a new color to add to the project
 * @param {*} colorName the name of the thread
 */
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
/**
 * this function adds the color template to the screen, showing the color, name, and number
 * @param {*} thread  the thread object that contains the information about the thread color
 */
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

/**
 * This function creates the design grid on the square
 */
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

//gets all the buttons on the screen
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

/**
 * This function increases the number of rows in the design grid
 */
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

/**
 * This function decreases the number of rows in the grid
 */
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

/**
 * This function increases the number of columns in the row
 */
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

/**
 * This function decreases the number of columns in the grid
 */
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

/**
 * This function removes the whole grid from the screen
 */
function removeWholeGrid(){
    for(let i = 0; i < parseInt(rowsAmount.innerText) * parseInt(colsAmount.innerText); i++){
        document.querySelector('#square-div').removeChild(document.querySelector('.square'));
    }
}

let fileList = null;

/**
 * This function takes in the photo file and resizes the grid based on the dimensions of the photo
 */
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

/**
 * creates a new, blank pattern for the user
 */
function onClickNewPattern(){
    window.alert("Are you sure you want to make a new pattern?");
    location.replace(location.href);
}

/**
 * takes the user to the DMC website to learn information about how to cross stitch
 */
function onClickLearn(){
    window.alert("You are being taken to a new page.");
}

const fileInput = document.querySelector('#upload-button');

fileInput.addEventListener('change', usePhoto);


clickIncreaseRows.addEventListener('click', onChangeRowsUp);
clickDecreaseRows.addEventListener('click', onChangeRowsDown);
clickIncreaseCols.addEventListener('click', onChangeColsUp);
clickDecreaseCols.addEventListener('click', onChangeColsDown);

/**
 * sets the grid if there is not a file loaded into the project
 */
for(let i = 0; i < parseInt(colsAmount.innerText) * parseInt(rowsAmount.innerText); i++){
    createGrid(); 
}


const newPattern = document.querySelector('#new-pattern');
newPattern.addEventListener('click', onClickNewPattern);
const learn = document.querySelector('#learn-button');
learn.addEventListener('click', onClickLearn);

const basePrice = 2.49;

let selectGlaze = document.querySelector('#flavors');
let selectSize = document.querySelector('#amount');
let glazeValue = 'Original';
let sizeValue = 1;

function computePrice(glazingPrice, packPrice) {
    const price = (( basePrice + glazingPrice) * packPrice).toFixed(2);
    displayPrice(price);
}

function displayPrice(price) {
    let priceElement = document.querySelector('#product-price');
    priceElement.innerText = price;
}

function onSelectGlazeChange(){
    glazeValue = this.value;
    for(let i = 0; i < 4; i++){
        if(glazeValue.localeCompare(glazing.option[i][0]) === 0) {
            for(let j = 0; j < 4; j++){
                if(sizeValue === packSize.option[j][0]){
                    computePrice(glazing.option[i][1], packSize.option[j][1]);
                }
            }
        }
    }
}

function onSelectSizeChange(){
    sizeValue = parseInt(this.value);
    for ( i = 0; i < 4; i++){
        if(sizeValue === packSize.option[i][0]){
            for (let j = 0; j < 4; j++){
                if(glazing.option[j][0] === glazeValue){
                    computePrice(glazing.option[j][1], packSize.option[i][1]);
                }
            }
        }
    }
}

const glazing = {
    option: [['Original', 0.00], ['Sugar milk', 0.00], ['Vanilla milk', 0.50], ['Double chocolate', 1.50]],
};

const packSize = {
    option: [[1, 1.00], [3, 3.00], [6, 5.00], [12, 10.00]],
};

selectGlaze.addEventListener('change', onSelectGlazeChange);
selectSize.addEventListener('change', onSelectSizeChange);


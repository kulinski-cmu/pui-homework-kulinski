const basePrice = 2.49;

let selectGlaze = document.querySelector('#flavors');
let selectSize = document.querySelector('#amount');
let glazeValue = 'Keep original';
let sizeValue = 1;
/*
*This function computes the new price based on the selections made by the user
*param --> glazingPrice : price associated with the glaze; packPrice : price assocated with the number of rolls
*/
function computePrice(glazingPrice, packPrice) {
    const price = (( basePrice + glazingPrice) * packPrice).toFixed(2);
    displayPrice(price);
}

/*
* This function displays the new price on the webpage
*param --> price : computed price of the rolls
 */
function displayPrice(price) {
    let priceElement = document.querySelector('#product-price');
    priceElement.innerText = price;
}

/*
 * This function runs when the glaze selector is changed and finds the correct values for the price function 
 */
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

/*
* This function runs when the size selector is changed and finds the correct values for the price function
 */
function onSelectSizeChange(){
    sizeValue = parseInt(this.value);
    for (let i = 0; i < 4; i++){
        if(sizeValue === packSize.option[i][0]){
            for (let j = 0; j < 4; j++){
                if(glazing.option[j][0] === glazeValue){
                    computePrice(glazing.option[j][1], packSize.option[i][1]);
                }
            }
        }
    }
}

//objects that contain all the information required for the two selectors
const glazing = {
    option: [['Keep original', 0.00], ['Sugar milk', 0.00], ['Vanilla milk', 0.50], ['Double chocolate', 1.50]],
};

const packSize = {
    option: [[1, 1.00], [3, 3.00], [6, 5.00], [12, 10.00]],
};

//event listeners to call the change functions
selectGlaze.addEventListener('change', onSelectGlazeChange);
selectSize.addEventListener('change', onSelectSizeChange);


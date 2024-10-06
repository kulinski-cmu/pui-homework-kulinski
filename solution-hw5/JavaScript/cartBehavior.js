//let template = document.querySelector('#product-template');
//let templateContent = template.content;
//const productList = document.querySelector('#product-list');
//productList.prepend(templateContent);

const cart = [];

const glazes = {
    "Original" : 0.00,
    "Sugar Milk" : 0.00,
    "Vanilla Milk" : 0.50,
    "Double Chocolate" : 1.50,
};

const sizes = {
    "1" : 1.00,
    "3" : 3.00,
    "6" : 5.00,
    "12" : 10.00,
};

const images = {
    'Original' : 'original-cinnamon-roll.jpg',
    'Walnut' : 'walnut-cinnamon-roll.jpg',
    'Raisin' : 'raisin-cinnamon-roll.jpg',
    'Apple' : 'apple-cinnamon-roll.jpg',
};

class Roll{
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.element = null;
    }
}

const originalRoll = new Roll("Original","Sugar Milk", "1", 2.49);
const walnutRoll = new Roll("Walnut", "Vanilla Milk", "12", 3.49);
const raisinRoll = new Roll("Raisin", "Sugar Milk", "3", 2.99);
const appleRoll = new Roll("Apple", "Original", "3", 3.49);

cart[0] = originalRoll;
cart[1] = walnutRoll;
cart[2] = raisinRoll;
cart[3] = appleRoll;

function computePrice(roll){
    let glazePrice = glazes[roll.glazing];
    let packPrice = sizes[roll.size];
    const price = ((roll.basePrice + glazePrice) * packPrice).toFixed(2);
    return price;
}

function createRoll(roll){
    const template = document.querySelector('#product-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.roll-element');

    const productList = document.querySelector('#product-list');
    productList.prepend(roll.element);
   let picture = roll.element.querySelector('#image');
    let name = roll.element.querySelector('#name');
    let glazeType = roll.element.querySelector('#glaze');
    let price = roll.element.querySelector('#pack-price');
    let numOfRolls = roll.element.querySelector('#pack-size');
    picture.src =  '../assets/products/' + images[roll.type];
    name.innerText = roll.type;
    glazeType.innerText = 'Glazing: ' + roll.glazing;
    price.innerText = '$' + computePrice(roll);
    numOfRolls.innerText = 'Pack Size: ' + roll.size;
}

for(let i = cart.length-1; i >= 0; i--){
    createRoll(cart[i]);
}

let totalPrice = 0;
function computeTotal(){
    for(let i = 0; i < cart.length; i++){
        totalPrice = totalPrice + parseInt(computePrice(cart[i]));
    }
    return totalPrice;
}

const totalPriceElement = document.querySelector('#total-price');
totalPriceElement.innerText = '$' + computeTotal();
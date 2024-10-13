let cart = [];

const glazes = {
    "Keep original" : 0.00,
    "Sugar milk" : 0.00,
    "Vanilla milk" : 0.50,
    "Double chocolate" : 1.50,
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
    'Strawberry' : 'strawberry-cinnamon-roll.jpg',
    'Double-Chocolate' : 'double-chocolate-cinnamon-roll.jpg',
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

/**
 * computes the price for the rolls in the pack
 * @param roll object
 * @returns the price
 */
function computePrice(roll){
    let glazePrice = glazes[roll.glazing];
    let packPrice = sizes[roll.size];
    const price = ((roll.basePrice + glazePrice) * packPrice).toFixed(2);
    return price;
}

/**
 * creates a new instance of a roll and places it on the cart page
 * @param roll object 
 */
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
    picture.alt = roll.type + ' cinnamon roll';
    name.innerText = roll.type;
    glazeType.innerText = roll.glazing;
    price.innerText = '$' + computePrice(roll);
    numOfRolls.innerText = 'Pack Size: ' + roll.size;
    totalPriceElement.innerText = '$' + computeTotal();

    const btnDelete = roll.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });
}

/**
 * removes the specified roll from the cart page
 * @param roll object 
 */
function deleteRoll(roll){
    roll.element.remove();
    newCart(roll);
    totalPriceElement.innerText = '$' + computeTotal();
    for(let i = 0; i < cart.length; i++){
        console.log(cart[i]);
    }
}

/** 
 * saves the rolls without the removed roll
 */
function saveToLocalStorage(){
    const rollArray = Array.from(cart);
    const rollArrayString = JSON.stringify(rollArray);
    localStorage.setItem('storedRolls', rollArrayString);
}

/**
 * helper function that resizes the array based on the new number of rolls
 * @param roll object
 */
function newCart(roll){
    const newCart = [];
    let j = 0;
    let rollRemoved = false;
    for(let i = 0; i < cart.length; i++){
        if(roll.type != cart[i].type || rollRemoved === true) {
            newCart[j] = cart[i];
            j++;
        } else {
            rollRemoved = true;
        }
    }
    cart = newCart;
    saveToLocalStorage();
}

/**
 * computes the total price of the cart
 * @returns the total price of all the rolls
 */
function computeTotal(){
    let totalPrice = 0.00;
    for(let i = 0; i < cart.length; i++){
        totalPrice = totalPrice + parseFloat(computePrice(cart[i]));
    }
    return totalPrice.toFixed(2);
}

/**
 * adds the rolls stored in local storage to the checkout page
 */
function retrieveFromLocalStorage(){
    const rollArrayString = localStorage.getItem('storedRolls');
    const rollArray = JSON.parse(rollArrayString);
    for (const rollData of rollArray){
        const newRoll = new Roll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
        cart.push(newRoll);
        createRoll(newRoll);
    }
}

const totalPriceElement = document.querySelector('#total-price');
if(localStorage.getItem('storedRolls') !== null){
    retrieveFromLocalStorage();
}
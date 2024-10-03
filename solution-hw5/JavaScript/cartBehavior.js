
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

class Roll{
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

const originalRoll = new Roll('Original','Sugar Milk', 1, 2.49);
const walnutRoll = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
const raisinRoll = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const appleRoll = new Roll('Apple', 'Original', 3, 3.49);

cart[0] = originalRoll;
cart[1] = walnutRoll;
cart[2] = raisinRoll;
cart[3] = appleRoll;

function computePrice(glazePrice, packPrice, basePrice){
    const price = ((basePrice + glazePrice) * packPrice).toFixed(2);
}
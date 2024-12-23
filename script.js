// CONSTANTS
let BURGERCOST = 5;
let FRIESCOST = 2;
let DRINKSCOST = 1;
let TAXRATE = 0.15;

// ELEMENTS
let nameObj = document.querySelector(".name");
let burgerObj = document.querySelector(".burger");
let friesObj = document.querySelector(".fries");
let drinksObj = document.querySelector(".drinks");
let subtotalObj = document.querySelector(".subtotal");
let taxObj = document.querySelector(".tax");
let totalObj = document.querySelector(".total");

// GLOBAL VARIABLES
//none

// FUNCTIONS
function calculateTotal() {
  let numBurgers = Number(burgerObj.value);
  let numFries = Number(friesObj.value);
  let numDrinks = Number(drinksObj.value);

  let subtotal =
    numBurgers * BURGERCOST + numFries * FRIESCOST + numDrinks * DRINKSCOST;

  let tax = subtotal * TAXRATE;
  let total = subtotal + tax;

  subtotalObj.value = subtotal.toFixed(2);
  taxObj.value = tax.toFixed(2);
  totalObj.value = total.toFixed(2);
}

// EVENT LISTENERS
document.querySelector(".orderTotal").addEventListener("click", calculateTotal);

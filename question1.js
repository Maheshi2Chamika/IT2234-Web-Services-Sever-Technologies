// Input values (You can modify these to test different cases)
let budget = 10;
let keyboardPrices = [3, 1];
let mousePrices = [5, 2, 8];

console.log("Budget= "+budget);
console.log("KeyboardPrices= "+keyboardPrices);
console.log("MousePrices= "+mousePrices);

// Initialize a variable to keep track of the maximum purchase value
let maxPurchase = -1;


for (let i = 0; i < keyboardPrices.length; i++) 
{
  for (let j = 0; j < mousePrices.length; j++) 
  {
    let totalPrice = keyboardPrices[i] + mousePrices[j];
 
    if (totalPrice <= budget && totalPrice > maxPurchase) 
	{
      maxPurchase = totalPrice;
    }
  }
}

console.log(maxPurchase);

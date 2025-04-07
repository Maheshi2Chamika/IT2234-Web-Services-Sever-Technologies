let num = 215;
console.log("Input number = "+num);

let numStr = num.toString();
let digits = [];


for (let i = 0; i < numStr.length; i++) 
{
  digits.push(numStr[i]);
}

digits.sort().reverse();

let maxNum = parseInt(digits.join(''));


console.log("Max = "+maxNum);

//Task 01
console.log("(Q1)")
function PrintMsg()
{
	console.log("Hello JS")
}
PrintMsg()

console.log()



//Task 02
console.log("(Q2)")

function sum()
{
	return 5+6
}
console.log(sum())

console.log()



//Task 03
console.log("(Q3)")

function sub(a,b)
{
	return a-b
}
console.log(sub(5,3))

console.log()



//Task 04
//Write a boolean function to find a given number is prime
console.log("(Q4) Prime Number")

let num = 3;
function isPrime(num)
{
	if(num <= 1)
		return false;
		
	for(let i=2; i<num ;i++)
		{
			if(num % i == 0)
			{
				return false;
			}
		}
		return true;
}
console.log(isPrime(num))

console.log()



//Task 05
//Write a recursive function to print numbers from 1 to n
console.log("(Q5) Recursive")

const n = 5;
function printNumbers(n, current = 1) {
    if (current > n) return;
    
    console.log(current);
    printNumbers(n, current + 1);
}

printNumbers(n);

console.log()



//Task 06
//Arrow function
console.log("(Q6)")

const msg = ()=>{return console.log("Hello JS")}
msg()

console.log()



//Task 07
//Write an arrow function to sum 2 numbers 
console.log("(Q7)")

const add = (a,b)=>{return a+b}
console.log(add(4,5))

console.log()




//Task 08
//default parameter
console.log("(Q8)")

const mul = (a,b=2)=>{return a*b}
console.log(mul(4,5))
console.log(mul(4))

console.log()

//Task 09
//Rest parameter
console.log("(Q9)")

const mysum = (...n)=>
{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,8,2))

console.log()



//Task 10
//callback Function
//a function passed as an argument
console.log("(Q10)")

const myName = (name)=>{console.log("My name is " +name)}

const greet =(msg,fun)=>{
	console.log("Hi.."+msg)
	fun
}
greet("Good morning", myName("Wijekoon"))

console.log()



//Task 11
console.log("(Q11)")

const multwo = (n)=>n*3

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)
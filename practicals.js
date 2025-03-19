//Task 01
console.log("(Q1)Number Array")
let numArray=[1,4,5,3]
console.log(numArray)

console.log()




//Task 02
console.log("(Q2)By using for loop")
for(let i=0; i<numArray.length; i++)
{
	console.log(numArray[i])
}
console.log()




//Task 03
console.log("(Q3)By using forEach loop")
numArray.forEach((n)=>
{
	console.log(n)
})

console.log()




//Task 04
//Find the max number in the array using forEach

console.log("(Q4)")
let max=numArray[0];
numArray.forEach((m)=>
{
	if(m>max)
	{
		max=m;
	}
})
console.log("Max ="+max)

console.log()




//Task 05
//Printthe nested array
//[[1,2,30],[5,6],[8,5,3]]
console.log("(Q5)")
console.log("Nested Array")

let nestedArray = [
					[1,2,30],
					[5,6],
					[8,5,3]
				  ]	
			
nestedArray.forEach((z)=>
{
	console.log(z)
})
console.log()




/*
Task 06
arr = [1,2,3,4,5,6]
target=7
Write a code to find the all pairs that sum up to the target
*/
console.log("(Q6)")

let arr = [1, 2, 3, 4, 5, 6];
let target = 7;
console.log("Pairs that sum up to " + target + ":");

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) 
		{
            console.log(`[${arr[i]}, ${arr[j]}]`);
        }
    }
}

console.log()




/*
Task 07
a=[4,5,6,3,7]
b=[8,3,2,1,5]
Find the common elements between a and b
*/

console.log("(Q7)Common elements")
let a=[4,5,6,3,7]
let b=[8,3,2,1,5]

for(let i of a)
{
	if(b.includes(i))
	{
		console.log(i)
	}
}
console.log()



/*
Task 08
[4,8,3,4,3,2,1,8,4]
Find the most frequent element in the array
*/
console.log("(Q8)Most frequent element")

let ar = [4, 8, 3, 4, 3, 2, 1, 8, 4]; 
let frequency = {}; 
let maxCount = 0;
let mostFrequentElement = null;


for (let num of ar) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) 
	{
        maxCount = frequency[num];
        mostFrequentElement = num;
    }
}

console.log("Most Frequent Element:", mostFrequentElement);
console.log()



/*
Task 09
Array Operation
push and pop
*/
console.log("(Q9)")

arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

console.log()




/*
Task 10
Reverse the array using push and pop
a b c d => d c b a
*/
console.log("(Q10)")

let array1 = ['a', 'b', 'c', 'd']; // Original array
let stack = []; 

console.log("Original Array")
console.log(array1)

while (array1.length > 0) {
    stack.push(array1.pop());
}

console.log("Reverse Array")
console.log(stack) 

console.log()




//*********************************************************************************
//JSON
//{key:value}
console.log("(Q11)")

let student = {regno:'2021/ICT/79',name:'Wijekoon',age:24,course:'IT'}
console.log(student)
console.log(student.name)

let students= [
				{regno:'2021/ICT/79',name:'Wijekoon',age:25,course:'IT'},
				{regno:'2021/ICT/100',name:'Edward',age:26,course:'IT'},
				{regno:'2021/ICT/200',name:'Ann',age:23,course:'IT'},
				{regno:'2021/ICT/300',name:'Michal',age:25,course:'IT'}
			  ]
console.log(students)

console.log()



/*
Task 12
Define 10 students in JSON
Store it in an array
Find the female students
Find the students who are following IT course
Find the max and average GPA among the students
*/

console.log("(Q12)")

let stu = [
    { "name": "Alice", "gender": "Female", "course": "IT", "GPA": 3.8 },
    { "name": "Bob", "gender": "Male", "course": "Engineering", "GPA": 3.5 },
    { "name": "Charlie", "gender": "Male", "course": "IT", "GPA": 3.2 },
    { "name": "Diana", "gender": "Female", "course": "Business", "GPA": 3.6 },
    { "name": "Eva", "gender": "Female", "course": "IT", "GPA": 3.9 },
    { "name": "Frank", "gender": "Male", "course": "Medicine", "GPA": 3.4 },
    { "name": "Grace", "gender": "Female", "course": "IT", "GPA": 3.7 },
    { "name": "Hank", "gender": "Male", "course": "IT", "GPA": 3.1 },
    { "name": "Ivy", "gender": "Female", "course": "Arts", "GPA": 3.3 },
    { "name": "Jack", "gender": "Male", "course": "Engineering", "GPA": 3.6 }
];


let femaleStudents = stu.filter(stu => stu.gender == "Female");
console.log("Female Students:", femaleStudents);


let itStudents = stu.filter(stu => stu.course == "IT");
console.log("IT Students:", itStudents);


let gpas = stu.map(stu => stu.GPA);

let maxGPA = Math.max(...gpas); 

let avgGPA = gpas.reduce((sum, gpa) => sum + gpa, 0) / stu.length; 

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2)); 

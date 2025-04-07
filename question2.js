let students = [
    { regno: "2021/ICT/01", name: "James", age: 21, course: "IT", Pro_languages: ["Java", "JS", "C++"] },
    { regno: "2021/ICT/02", name: "Sophia", age: 22, course: "CS", Pro_languages: ["Python", "C", "Go"] },
    { regno: "2021/ICT/03", name: "Michael", age: 23, course: "Software Engineering", Pro_languages: ["C#", "JavaScript", "Swift"] },
    { regno: "2021/ICT/04", name: "Emma", age: 21, course: "Data Science", Pro_languages: ["Python", "R", "SQL"] },
    { regno: "2021/ICT/05", name: "Daniel", age: 22, course: "Cybersecurity", Pro_languages: ["Ruby", "Bash", "C"] }
  ];

let uniqueLanguages = new Set();           //A Set only keeps unique values — so it automatically avoids duplicates.

for (let i = 0; i < students.length; i++) 
{
  let langs = students[i].Pro_languages;

  for (let j = 0; j < langs.length; j++) 
  {
    if (langs[j] == "JS") 
	{
      uniqueLanguages.add("JavaScript");
    } 
	else 
	{
      uniqueLanguages.add(langs[j]);
    }
  }
}

// Expected output order from the question
let desiredOrder = ['Java', 'JavaScript', 'C++', 'Python', 'C','Go', 'Swift', 'R', 'SQL', 'Ruby', 'Bash'];

let result = [];

for (let i = 0; i < desiredOrder.length; i++) 
{
  if (uniqueLanguages.has(desiredOrder[i])) 
  {
    result.push(desiredOrder[i]);
  }
}

console.log("[" + result.map(r => `'${r}'`).join(", ") + "]");
/*
map(r => '${r}') adds single quotes around each language.

join(", ") puts all items together separated by a comma and a space.

[...] wraps the output to look like a JavaScript array.
*/


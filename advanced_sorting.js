var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compare(a, b){
  if (a.name.localeCompare(b.name)) {
    return (a.name.localeCompare(b.name))
  } return b.age - a.age
}

students.sort(compare)

console.log(students);

// loop through the array
// if it finds the same name
// then sort by age
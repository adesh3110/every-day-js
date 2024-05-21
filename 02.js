// You have an array of objects representing students. Each student object has the following properties:
//  name, age, and grades (an array of numbers representing their grades).
//  Write a function getTopStudents that returns the names of the top N students based
//  on their average grades. If two students have the same average grade,
//  they should be considered equally without further sorting.

// const students = [
//   { name: "Alice", age: 20, grades: [85, 90, 92] },
//   { name: "Bob", age: 22, grades: [80, 85, 88] },
//   { name: "Charlie", age: 23, grades: [90, 92, 93] },
//   { name: "David", age: 21, grades: [70, 75, 78] },
//   { name: "Eve", age: 20, grades: [88, 91, 85] },
// ];
``;
// console.log(getTopStudents(students, 2));
// Output: ['Charlie', 'Alice'] or ['Charlie', 'Eve'] or ['Alice', 'Eve'] (since Alice and Eve have close average grades)

const students = [
  { name: "Alice", age: 20, grades: [85, 90, 92] },
  { name: "Bob", age: 22, grades: [80, 85, 88] },
  { name: "Charlie", age: 23, grades: [90, 92, 93] },
  { name: "David", age: 21, grades: [70, 75, 78] },
  { name: "Eve", age: 20, grades: [88, 91, 85] },
];

function getTopStudents(students, N) {
  const newArray = students
    .map((student) => {
      const total = student.grades.reduce((a, b) => {
        return a + b;
      }, 0);
      ``;
      return { ...student, total: total, avg: total / 3 };
    })
    .sort((a, b) => b.total - a.total);
  return newArray.splice(0, N).map((e) => e.name);
}

console.log(getTopStudents(students, 2));

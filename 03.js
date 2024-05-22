// You have an array of objects representing students and their scores in different subjects. Write a function that returns the names of students who have an average score above 75. Use map, reduce, and filter methods to accomplish this.

const students = [
  { name: "John", scores: [(math = 80), (english = 70), (science = 90)] },
  { name: "Jane", scores: [(math = 60), (english = 65), (science = 70)] },
  { name: "Alice", scores: [(math = 85), (english = 95), (science = 80)] },
  { name: "Bob", scores: [(math = 75), (english = 85), (science = 60)] },
];

//   const result = getTopStudents(students);

//   console.log(result); // Should output: ["John", "Alice"]

function getTopStudents(students) {
  const newArray = students.map((student) => {
    const total = student.scores.reduce((a, b) => {
      return a + b;
    }, 0);
    return { ...student, average: total / 3 };
  });

  console.log(newArray);

  const result = newArray
    .filter((student) => student.average > 75)
    .map((student) => student.name);

  console.log(result);
}

getTopStudents(students);

// Problem: Implement a Function to Flatten a Nested Array

// Write a function flattenArray that takes a nested array of integers and returns a flattened version of the array.

// flattenArray([1, [2, [3, 4], 5], 6]);
// should return [1, 2, 3, 4, 5, 6]

function flattenArray(arr) {
  let result = [];

  const flatten = (element) => {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      result.push(element);
    }
  };

  flatten(arr);
  return result;
}

// Test cases
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[1, 2, [3]], 4])); // [1, 2, 3, 4]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]

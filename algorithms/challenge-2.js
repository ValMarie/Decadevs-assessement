// # Challenge 2

// Implement a function filterArray(arr) that takes an array of non-negative integers and strings and return a new array without the strings.

// # Example
//     filterArray([1, 2, "a", "b"]) to return [1,2]
//     filterArray([4, "z", "f", 5]) to return [4,5]
//     filterArray(["$%^", 567, "&&&"]) to return [567]

function filterArray(arr = []) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
module.exports = filterArray;

//  Challenge 1

// Implement a function secondLargest(arr) that takes an array of numbers and returns the second largest number.

// # Example
//     secondLargest([6, 3, 0, 30, 7]) to return 7
//     secondLargest([71, 33, 3, 51, 18, 6]) to return 51
//     secondLargest([42, 68, 22, 60, 7]) to return 60

function secondLargest(arr = []) {
  let sorted = arr.sort((a, b) => a - b);
  let unique = [...new Set(sorted)];
  return unique[unique.length - 2];
}
module.exports = secondLargest;

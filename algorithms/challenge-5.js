function filterList(arr) {
    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        filtered.push(arr[i]);
      }
    }
    return filtered;
 
 }

  module.exports =filterList
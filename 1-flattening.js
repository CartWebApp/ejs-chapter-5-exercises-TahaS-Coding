let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((flatArr, currentArr) => flatArr.concat(currentArr)));
// → [1, 2, 3, 4, 5, 6]
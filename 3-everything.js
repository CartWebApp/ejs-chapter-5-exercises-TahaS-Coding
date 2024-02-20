function every(array, test) {
    for (let element of array){
      if (!test(element)){
        return false;
      }
    }
    return true;
  }

function everyVersionTwo(array, test){
  return array.some(element => !test(element)) ?  false : true;
}
 

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everyVersionTwo([1, 3, 5], n => n < 10));
// → true
console.log(everyVersionTwo([2, 4, 16], n => n < 10));
// → false
console.log(everyVersionTwo([], n => n < 10));
// → true
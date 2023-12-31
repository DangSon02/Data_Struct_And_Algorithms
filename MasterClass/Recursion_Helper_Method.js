// solution 1

// function collectOddValues(arr) {
//   // tao mot mang moi
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }

//     helper(helperInput.slice(1));
//   }
//   helper(arr);

//   return result;
// }

// solution 2

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]));

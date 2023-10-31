// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// analyze:
//  + parameters - array - no size limit,
//  + return true or false,

//coding
// solution 1:

// const array1 = ["a", "b", "c", "x"];

// const array2 = ["z", "y", "x"];

// function containCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

//  O(n^2);
// console.log(containCommonItem(array1, array2));
//===================================================================//

// solution 2:

const array1 = ["a", "b", "c", "x"];

const array2 = ["z", "y", "r"];

function containCommonItem2(arr1, arr2) {
  // tao mot object sau do cho cac gia tri trong mang array1 la true
  let object = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!object[arr1[i]]) {
      const items = arr1[i];
      object[items] = true;
    }
  }

  // lap qua array2 xong cho cac gia tri array2 vao object neu trung gia tri thi tra ve true nguoc lai false

  for (let j = 0; j < arr2.length; j++) {
    if (object[arr2[j]]) {
      return true;
    }
  }

  return false;
}
// O(n);

//console.log(containCommonItem2(array1, array2));

// solution 3:

function containCommonItem3(arr1, arr2) {
  return arr1.some((items) => arr2.includes(items));
}

console.log(containCommonItem3(array1, array2));

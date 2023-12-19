// /*
//   input: 'iamprogramming'
//   output: 'i am programming'

// */

// cinsmsldasdl;ShadowRoot

// const dsakdskdczsc

let arr1 = [17, 28, 30];
let arr2 = [99, 16, 8];

function compareTriplets(a, b) {
  let i = 0;
  let j = 0;
  let countA = 0;
  let countB = 0;
  while (i < a.length && j < b.length) {
    if (a[i] > b[j]) {
      countA++;
    } else if (a[i] < b[j]) {
      countB++;
    }
    i++;
    j++;
  }
  return countA + " " + countB;
}

console.log(compareTriplets(arr1, arr2));

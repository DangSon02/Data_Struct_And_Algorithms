/**
 * search([1,2,3,4,5,6],4) -> 3
 * search([1,2,3,4,5,6],6) -> 5
 * search([1,2,3,4,5,6],11) -> -1
 *
 */

function search(arr, val) {
  // khoi tao min max
  let min = 0;
  let max = arr.length - 1;

  // lap tu min den max
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    let current = arr[middle];
    // neu ma current < val thi middle + 1;
    if (current < val) {
      min = middle + 1;
    } else if (current > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 11));

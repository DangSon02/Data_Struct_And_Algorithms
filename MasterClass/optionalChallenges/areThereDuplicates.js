/**
 * areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
 */

// phuong phap Frequency Counter
function areThereDuplicates(...arg) {
  let obj = {};
  for (let val of arg) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
}

// phuong phap Multiple Pointers

function areThereDuplicates2(...arg) {
  arg.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  let i = 0;
  for (let j = 1; j < arg.length; j++) {
    if (arg[i] === arg[j]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}

console.log(areThereDuplicates2(1, 2, 2));

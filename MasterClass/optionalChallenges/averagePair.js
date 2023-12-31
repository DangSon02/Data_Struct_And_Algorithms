// averagePair([1,2,3],2) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// ap dung gia thuat Multiple Pointers
function averagePair(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === val) return true;
    else if (avg < val) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2));

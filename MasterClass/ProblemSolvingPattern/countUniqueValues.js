// countUniqueValues([1,1,1,1,1,2]) -> 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -> 7
// countUniqueValues([]) -> 0
// countUniqueValues([-2,-1,-1,0,1]) -> 4

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  // dat con tro i = 0;
  let i = 0;

  //lap qua mang
  for (let j = 1; j < arr.length; j++) {
    // neu gia tri tai i ma !== voi gia tri tai j + 1 thi cho i tang len 1
    // va gan gia i = j

    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  // return ve gia tai i + 1 va ket thuc

  return i + 1;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));

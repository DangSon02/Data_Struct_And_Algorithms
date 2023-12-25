function meger(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function megerSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let arrLeft = megerSort(arr.slice(0, mid));
  let arrRigth = megerSort(arr.slice(mid));

  console.log("left::", arrLeft);
  console.log("rigth::", arrRigth);
  return meger(arrLeft, arrRigth);
}

console.log(megerSort([10, 24, 76, 73]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    const swap = (arr, index1, index2) => {
      return ([arr[index1 + 1], arr[index1]] = [arr[index1], currentVal]);
    };
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      //   arr[j + 1] = arr[j];
      //   arr[j] = currentVal;
      swap(arr, j, currentVal);
    }
  }

  return arr;
}

console.log(insertionSort([4, 5, 6, 2, 1, 8, 0]));

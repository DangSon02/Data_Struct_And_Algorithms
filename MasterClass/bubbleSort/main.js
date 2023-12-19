function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  const swap = (arr, index1, index2) => {
    return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

console.log(bubbleSort2([2, 5, 6, 1, -3]));

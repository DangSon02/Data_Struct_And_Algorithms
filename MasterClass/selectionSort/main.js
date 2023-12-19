function selectionSort(arr) {
  const swap = (arr, index1, index2) => {
    return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        lowest = j;
      }
    }

    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, -19, 17]));

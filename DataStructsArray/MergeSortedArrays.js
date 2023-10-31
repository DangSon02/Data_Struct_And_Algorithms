const array1 = [0, 3, 4, 31];

const array2 = [3, 4, 6, 30];

// input = [0,3, 4, 4,6,30,31];

// solution 1

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];

  let arrayItem1 = arr1[0]; //0
  let arrayItem2 = arr2[0]; //3
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (arrayItem1 || arrayItem2) {
    console.log(arrayItem1, arrayItem2);
    if (arrayItem2 === undefined || arrayItem1 < arrayItem2) {
      mergedArray.push(arrayItem1);
      arrayItem1 = arr1[i];
      i++;
    } else {
      mergedArray.push(arrayItem2);
      arrayItem2 = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

// solution 2

function mergeSortedArrays2(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  newArr.sort((a, b) => a - b);

  console.log(newArr);
}

console.log(mergeSortedArrays(array1, array2));

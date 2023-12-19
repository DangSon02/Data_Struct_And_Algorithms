/**
 *  input_1: same([1,2,3], [4,1,9]) -> true
 * input_2: same([1,2,3],[1,9]) -> false
 * input_3: same([1,2,1], [4,4,1]) -> false (must be same frequency)
 *
 *
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // tao 2 object moi cho moi thang
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // lap qua mang tung thang va cho no bang so lan xuat hien
  for (let val of arr1) {
    //console.log(val);
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // lap qua thang dau tien

  for (let key in frequencyCounter1) {
    // neu cac gia tri o thang 2 khong binh phuong thi se tra ve false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // neu ma gia tri binh phuong o thang 2 khac thang 1 thi tra ve fale
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same([1, 2, 3], [4, 1, 9]));

/**
 * maxSubarraaySum([1,2,5,2,8,1,5], 2) -> 10
 * maxSubarraaySum([1,2,5,2,8,1,5], 4) -> 17
 * maxSubarraaySum([4,2,1,6], 1) -> 6
 * maxSubarraaySum([4,2,1,6,2], 4) -> 13
 * maxSubarraaySum([], 4) -> null
 */

function maxSubarraaySum(arr, number) {
  // dat bien max = 0 va bien nhớ tong = 0;
  let max = 0;
  let tempSum = 0;
  if (arr.length < number) {
    return null;
  }

  // lap va tinh gia tri max trong pham vi number
  for (let i = 0; i < number; i++) {
    max = max + arr[i];
  }
  // cho bie the mang tong = max
  tempSum = max;

  // lap trong khoang tu number den het mang
  for (let i = number; i < arr.length; i++) {
    // bien nhon tong = - cho gia tri dau va cong lai gia tri tiep theo
    tempSum = tempSum - arr[i - number] + arr[i];
    max = Math.max(max, tempSum);
  }
  return max;
}

console.log(maxSubarraaySum([4, 2, 1, 6], 2));

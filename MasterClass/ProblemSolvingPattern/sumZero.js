/**
 * sumZero([-3, -2, -1, 0, 1, 2,3]) -> [-3, 3]
 * sumZero([-2, 0, 1, 3]) -> undefined
 * sumZero([1,2,3]) -> undefined
 *
 */

function sumZero(arr) {
  // dat con tro trai = phan tu dau tien trong mang
  let left = 0;

  // dat con tro phai = phan tu cuoi mang
  let right = arr.length - 1;

  // lap qua mang
  while (left < right) {
    let sum = arr[left] + arr[right];
    // neu sum  = 0 thi retunr ve [con tro trai va con tro phai tai vi tri tro trai + tro phai  = 0]
    if (sum === 0) {
      return [arr[left], arr[right]];

      //new sum > 0 thi tro phai lui ve 1 pha tu
    } else if (sum > 0) {
      right--;
    } else {
      // neu sum < 0 thi tro trai tien len
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

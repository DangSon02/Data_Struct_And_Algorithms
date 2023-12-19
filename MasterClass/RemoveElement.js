/**
 *
 * @param {*} nums
 * @param {*} val
 * removeElement([3,2,2,3], 3) -> 2
 * removeElement([0,1,2,2,3,0,4,2], 2) -> 5
 *
 *
 */

var removeElement = function (nums, val) {
  let index = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[index] = nums[j];
      index++;
    }
  }
  return index;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

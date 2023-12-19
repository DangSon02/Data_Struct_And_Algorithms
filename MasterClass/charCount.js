/**
 *  input_1: 'aaa' -> {a:3}
 * input_2: 'abcde' -> {a:1,b:1,c:1,d:1,e:1}
 * input_3: 'Your PIN number is 1234!' ->
 *  {1:1, 2:1, 3:1, 4:1,b:1, e:1, i:2, m:1, n:2, o:1, p:1, r:2, s:1, u:2, y:1 }
 *
 */

function chartCount(str) {
  /**
   * make object to return at end
   * loop over string, for each character...
   * if the char is a number/letter AND is key in object, add one to count
   * if the char is a number//letter AND not in object, add it to object and set value to 1
   * if character is something else (space, period, etc.) don't do anything
   * return object at end
   */

  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
}

console.log(chartCount("Your PIN number is 1234!"));

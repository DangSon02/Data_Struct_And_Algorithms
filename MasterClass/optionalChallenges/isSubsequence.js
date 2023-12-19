// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    j++;

    if (i === str1.length) return true;
  }
  return false;
}

console.log(isSubsequence("abc", "abracadabra"));

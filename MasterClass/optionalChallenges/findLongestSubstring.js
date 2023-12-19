/**
 * findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
 */

// solution 1
function findLongestSubstring(str) {
  let obj = {};
  let start = 0;
  let longest = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (obj[letter]) {
      start = Math.max(start, obj[letter]);
    }
    longest = Math.max(longest, i - start + 1);
    obj[letter] = i + 1;
  }
  return longest;
}

// solution 2

function findLongestSubstring2(str) {
  let start = 0;
  let end = 0;
  let longest = 0;
  let set = new Set();
  while (end < str.length) {
    let letter = str[end];

    if (!set.has(letter)) {
      set.add(letter);
      longest = Math.max(longest, end - start + 1);
      end++;
    } else {
      set.delete(str[start]);
      start++;
    }
  }
  console.log(set);
  return longest;
}

var lengthOfLongestSubstring3 = function (str) {
  let start = 0;
  let end = 0;
  let longest = 0;
  let obj = {};
  if (str.length === 0) {
    return 0;
  }
  while (end < str.length) {
    let cur = str[end];
    if (obj[cur]) {
      start++;
    }
    longest = Math.max(longest, end - start + 1);
    obj[cur] = end++;
  }
  return longest - 1;
};

console.log(lengthOfLongestSubstring3("abcabcbb"));

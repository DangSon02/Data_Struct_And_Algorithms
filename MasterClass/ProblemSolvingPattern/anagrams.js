/**
 * validAnagram('', '') -> true
 * validAnagram('aaz, 'zza') -> false
 * validAnagram('anagram', 'nagaram') -> true
 * validAnagram('rat', 'car') -> false
 * validAnagram('awesome', 'awesom') -> false
 * validAnagram('qwerty', 'qeywrt') -> true
 * validAnagram('texttwisttime', 'timetwisttext') -> true
 *
 *
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // tao mot object moi
  let obj = {};

  // lap qua chuoi dau tien vao dem so lan xuat hien gia co trong chuoi 1
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }

  // lap qua chuoi 2
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // neu ma gia tri o chuoi 2 ko co trong object moi thi tra ve false
    if (!obj[letter]) {
      console.log(obj);
      return false;
    } else {
      // neu ma cgia tr o chuoi 2 co thi cac gia tri co trong object moi tru di 1

      obj[letter] = obj[letter] - 1;
    }
  }
  console.log(obj);

  // tra ve true va ket thuc
  return true;
}

console.log(validAnagram("tat", "xtt"));

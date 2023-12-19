/**
 * 
 * sameFrequency(182,281) // true
   sameFrequency(34,14) // false
   sameFrequency(3589578, 5879385) // true
   sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2) {
  // tao mot objec moi
  let obj = {};
  // chuyen 2 so ve chuoi
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  // lap qua str1 de tim so lan xuat hien cua cac gia tri
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }
  // lap qua str2 de kiem tra cac gia tri o str2 co trong str 1 ko
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!obj[letter]) {
      return false;
    }
  }
  return true;
}

// soluton 2
function sameFrequency2(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385));

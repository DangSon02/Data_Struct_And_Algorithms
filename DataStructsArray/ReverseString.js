//Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

const string = "Hi My name is Andrei";
const string2 = "Hi Dang Van Son";
const string3 = "Lập Trình Viên";

// solution 1
function reverse(str) {
  if (!str || typeof str !== "string" || str.length < 2) {
    console.log("Đầu vào bị sai");
  }
  const newString = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newString.push(str[i]);
  }
  return newString.join("");
}

// solution 2
function reverse2(str) {
  return str.split("").reverse().join("");
}

// solution 3

const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse(string));
console.log(reverse2(string2));
console.log(reverse2(string3));

function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("Booo!");
  }
}

booo([1, 2, 3, 4, 5]);

function hi(n) {
  let arrHi = [];

  for (let i = 0; i < n; i++) {
    arrHi[i] = "Hi!";
  }

  return arrHi;
}

console.log(hi(6));

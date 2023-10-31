// in tất cả các số fibonaci nhỏ hơn 1000 và tính tổng của chúng

function fibonaci(limit) {
  let current = 0;
  let next = 1;
  let sum = 0;
  // In ra so fibonaci đầu tiên
  console.log(current);
  for (let i = 1; next < limit; i++) {
    console.log(next);
    sum = sum + next;
    let temp = next;
    next = next + current;
    current = temp;
  }
  return sum;
}

console.log(`Tổng các số fibonaci là::`, fibonaci(10));

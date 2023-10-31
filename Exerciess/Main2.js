// Đưa ngẫu nhiên các số từ 1 -> 100 vào mảng có độ dài 95.Hãy in ra 5 số đã không đưa vào mảng trên

function layPhanTuDu() {
  const myArr = new Array(95);

  for (let i = 0; i < myArr.length; i++) {
    // myArr[i] = Math.floor(Math.random() * 100) + 1;
    myArr[i] = i + 1;
  }
  console.log("myArr::", myArr);
  const checkArr = [];

  for (let i = 1; i <= 100; i++) {
    checkArr.push(i);
  }
  console.log("checkArr::", checkArr);

  const x = checkArr.filter((item) => {
    return myArr.indexOf(item) === -1;
  });
  const namPhanTu = x.splice(0, 5);
  console.log(namPhanTu);
}

layPhanTuDu();

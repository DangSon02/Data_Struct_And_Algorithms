//Các quy tắt
// quy tắt 1: Worst case(Trường hợp xấu nhất)
// quy tắt 2: Remove Constants(Loại bỏ hằng số)
// quy tắt 3: Different terms for inputs(Các đầu vào khác nhau)
// quy tắt 4: Drop Non Dominants(Bỏ những thứ không chiếm ưu thế)
const Nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const lage = new Array(100000).fill("nemo");
function findNemo(array) {
  let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!!!!");
    }
  }
  let t1 = performance.now();
  console.log("Call the time find Nemo: " + (t1 - t0) + " Milliseconds");
}
//findNemo(everyone); // O(n) linear Time (Thời gian tuyến tính)
/*ví dụ chúng ta có mảng Nemo thì sẽ là O(1);
                  mảng evryone thì sẽ là O(10);
                  mảng lage thì sẽ là O(100000
  */

//------------------------------------------------------------------//

//O(1) constant time (Thời gian không đổi)
//const boxes = [0, 1, 2, 3, 4, 5];

function logFisrtTwpBoxes(boxes) {
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}
//logFisrtTwpBoxes(boxes); //O(2)
//===============================================================//
// Bài tập 1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1) vì chạy một lần
  a = 50 + 3; //O(1) vì chạy một lần

  for (let i = 0; i < input.length; i++) {
    //O(n) vì phụ thuộc vào input
    anotherFunction(); //O(n) vì hàm này không biết sẽ gọi bao nhiêu lần và nó phụ thuộc vào độ dài input
    let stranger = true; //O(n) vì không biết nó sẽ chạy bao nhiêu lần, nó phụ thuộc vào độ dài của input
    a++; //O(n) vì không biết nó sẽ tăng giá trị lên bao nhiêu lần, nó phụ thuộc vào độ dài của input
  }
  return a; //O(1) vì chạy một lần
}
// Vậy Big O trong đoạn mã trên là O(1 + 1 + 1 + n + n + n + n) = O(3 + 4n) = O(n)

// Bài tập 2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Vậy Big O trong đoạn mã trên là O(4 + 7n ) = O (n)

//----------------------------------------------------//
//Log all pairs of array

const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

//logAllPairsOfArray(boxes);

//--------------------------------------------//
const number = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(number);
/// O(n^2);
////-----------------------------------

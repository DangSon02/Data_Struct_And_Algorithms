class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    if (this.length <= 0) {
      console.log("Khong co phan tu de xoa");
    }
    return lastItem;
  }

  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItem(index);
    //console.log(item);
    return item;
  }

  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();
  }
}

const myArr = new MyArray();
myArr.push("Sơn");
myArr.push("Tấn");
myArr.push("Hòa");
myArr.push("Hoàng");
myArr.push("Lời");
myArr.push("Hiếu");
myArr.push("Phố");
myArr.push("Phiên");
myArr.pop();
myArr.deleteAtIndex(3);
console.log(myArr);

class Player {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

  introduce() {
    console.log(
      `My name is ${this.name} and wearing jersey number ${this.number}`
    );
  }
}

class Local extends Player {
  constructor(name, number, local) {
    super(name, number);
    this.local = local;
  }

  Show() {
    console.log(`I play in the position ${this.local}`);
  }
}

const Messi = new Local("Messi", 10, "Tiền Đạo");
Messi.introduce();

Messi.Show();

console.log(Messi);

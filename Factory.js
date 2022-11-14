// Factory Pattern
const num = new Object(42);
const str = new Object("abc");
num.constructor.name;
str.constructor.name;

class Nike {
  constructor() {
    this.name = "nike";
  }
}

class Adidas {
  constructor() {
    this.name = "adidas";
  }
}

class NikeFactory {
  static createShoes() {
    return new Nike();
  }
}

class AdidasFactory {
  static createShoes() {
    return new Adidas();
  }
}

const factoryList = { NikeFactory, AdidasFactory };

class ShoesFactory {
  static createShoes(type) {
    const factory = factoryList[type];
    return factory.createShoes();
  }
}

const main = () => {
  // 나이키 신발을 주문한다.
  const shoesBrand = ShoesFactory.createShoes("NikeFactory");
  // 신발 브랜드 이름을 부른다.
  console.log(shoesBrand.name); // nike
};

main();

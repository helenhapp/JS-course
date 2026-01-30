// --- Частина 1 ---

class Product {
  constructor(name, price, caloriesPer100g, weight) {
    this.name = name;
    this.price = price;
    this.caloriesPer100g = caloriesPer100g;
    this.weight = weight;
  }

  info() {
    console.log(`Це продукт: ${this.name}.`);
  }

  showPrice() {
    console.log(`Ціна продукту "${this.name}": ${this.price} грн.`);
  }

  showCalories() {
    let totalCalories = (this.caloriesPer100g / 100) * this.weight;
    console.log(
      `Калорійність "${this.name}" на ${this.weight} грам: ${totalCalories} ккал.`,
    );
  }
}

const carrot = new Product("Морква", 18, 41, 200);
carrot.info();
carrot.showPrice();
carrot.showCalories();
console.log();

// --- Частина 2 ---

class Fruit extends Product {
  constructor(name, price, caloriesPer100g, weight, vitaminCContent) {
    super(name, price, caloriesPer100g, weight);
    this.vitaminCContent = vitaminCContent;
    this.type = "Фрукт";
  }
}

class DairyProduct extends Product {
  constructor(name, price, caloriesPer100g, weight, fatContent) {
    super(name, price, caloriesPer100g, weight);
    this.fatContent = fatContent;
    this.type = "Молочний продукт";
  }
}

const apple = new Fruit("Яблуко", 25, 52, 150, 12);
apple.info();
console.log(`Тип: ${apple.type}, Вітамін С: ${apple.vitaminCContent} мг.\n`);

const milk = new DairyProduct("Молоко", 30, 60, 250, 3.2);
milk.info();
console.log(`Тип: ${milk.type}, Жирність: ${milk.fatContent}%.\n`);

// --- Частина 3 ---

function displayProductsInfo(products) {
  console.log("Вміст кошика:");
  for (let product of products) {
    let result = `- ${product.name}: ціна ${product.price} грн, вага ${product.weight} г, калорійність ${product.caloriesPer100g} на 100 г`;

    if (product.type === "Фрукт") {
      result += `, містить ${product.vitaminCContent} мг вітаміну С на 100 г.`;
    } else if (product.type === "Молочний продукт") {
      result += `, має ${product.fatContent}% жирності.`;
    } else {
      result += ".";
    }

    console.log(result);
  }
}

let myProducts = [carrot, apple, milk];
displayProductsInfo(myProducts);

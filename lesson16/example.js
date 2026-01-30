// --- Частина 1: Основи (Герой) ---

class Hero {
  constructor(name, level, damagePerHit, hitsCount) {
    this.name = name; // Ім'я
    this.level = level; // Рівень
    this.damagePerHit = damagePerHit; // Шкода за один удар
    this.hitsCount = hitsCount; // Кількість ударів у комбо
  }

  info() {
    console.log(`Це герой: ${this.name}.`);
  }

  calculateTotalDamage() {
    // Рахуємо загальну шкоду: сила удару x кількість ударів
    let totalDamage = this.damagePerHit * this.hitsCount;
    console.log(
      `Загальна атака "${this.name}" за ${this.hitsCount} ударів: ${totalDamage} одиниць.`,
    );
  }
}

const basicHero = new Hero("Новачок", 1, 10, 3);
basicHero.info();
basicHero.calculateTotalDamage();
console.log();

// --- Частина 2: Класи персонажів (Воїн та Маг) ---

class Warrior extends Hero {
  constructor(name, level, damagePerHit, hitsCount, armor) {
    super(name, level, damagePerHit, hitsCount);
    this.armor = armor; // Унікальна властивість: Броня
    this.type = "Воїн";
  }
}

class Mage extends Hero {
  constructor(name, level, damagePerHit, hitsCount, mana) {
    super(name, level, damagePerHit, hitsCount);
    this.mana = mana; // Унікальна властивість: Мана
    this.type = "Маг";
  }
}

const aragorn = new Warrior("Арагорн", 50, 45, 4, 150);
aragorn.info();
console.log(`Клас: ${aragorn.type}, Броня: ${aragorn.armor} од.\n`);

const gandalf = new Mage("Гендальф", 100, 80, 2, 500);
gandalf.info();
console.log(`Клас: ${gandalf.type}, Мана: ${gandalf.mana} од.\n`);

// --- Частина 3: Команда та Логіка ---

function displayTeamInfo(heroes) {
  console.log("Склад команди:");
  for (let hero of heroes) {
    // Базовий рядок
    let result = `- ${hero.name}: рівень ${hero.level}, комбо з ${hero.hitsCount} ударів, атака ${hero.damagePerHit}`;

    // Логіка для різних класів
    if (hero.type === "Воїн") {
      result += `, має міцну броню: ${hero.armor} од.`;
    } else if (hero.type === "Маг") {
      result += `, володіє магією: ${hero.mana} мани.`;
    } else {
      result += ".";
    }

    console.log(result);
  }
}

let myTeam = [basicHero, aragorn, gandalf];
displayTeamInfo(myTeam);

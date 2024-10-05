class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Team {
  constructor() {
    this.team = [
      new Character('Лучник', 'Bowman', 50, 1, 40, 10), 
      new Character('Фехтовальщик', 'Swordsman', 100, 3, 20, 8),
      new Character('Волшебник', 'Magician', 70, 2, 10, 20),
      new Character('Демон', 'Daemon', 30, 2, 40, 15),
    ];
    this.currentIndex = 0;
  
  }

  *[Symbol.iterator]() {
    for (let character of this.team) {
      yield character;
    }

  }
  
}

let b = new Team();
for (let character of b) {
  console.log(character);
}
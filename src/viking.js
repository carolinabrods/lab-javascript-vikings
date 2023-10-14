// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

const soldier = new Soldier(100, 300);
console.log(soldier);
console.log(soldier.attack());
console.log(soldier.receiveDamage(50)); // -> undefined - why?

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

const viking1 = new Viking('Ted', 100, 300);
console.log(viking1);

// Saxon
class Saxon extends Soldier {
  // no need of constructor method

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// BONUS

// War

function selectRandom(array) {
  const min = 0;
  const max = array.length - 1;
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  return array[randomInteger];
}

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
}

const war = new War();
war.addViking(viking1);
console.log(war);

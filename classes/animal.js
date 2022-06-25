class Animal {
  constructor(type = 'animal') {
    this._type = type
  }

  getType() {
    return this._type
  }

  makingSound() {
    console.log('Fazendo som de animal')
  }
}
class Cat extends Animal {
  constructor() {
    super('cat')
  }

  makingSound() {
    super.makingSound()
    console.log('miau')
  }
}

let cat = new Cat()

cat.makingSound()
/*
let animal = new Animal('Jabuti')

console.log(animal.getType())
animal.makingSound()*/

// Interface Segregation Principle (Принцип разделения Интерфейса)

class Animal {
  constructor(name) {
    this.name = name
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`)
  }
}

const flyer = {
  fly() {
    console.log(`${this.name} умеет летать`)
  }
}

const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`)
  }
}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Дарик')
dog.walk()
dog.swim()

const eagle = new Eagle('Сену')
eagle.fly()
eagle.walk()

const whale = new Whale('Большой синий друг')
whale.swim()

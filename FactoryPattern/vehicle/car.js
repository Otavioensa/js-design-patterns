class Car {
  constructor(km) {
    this.km = km
    this.price = 3.2
    this.fee = 0.3
  }

  calculatePrice() {
    return this.price * this.km + (this.fee * 0.5)
  }

  doSomeCarFunction() {
    console.log('A car function')
  }
}

module.exports = Car
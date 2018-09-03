class Truck {
  constructor(km) {
    this.km = km
    this.price = 4.1
    this.fee = 0.3
  }

  calculatePrice() {
    return this.price * this.km + this.fee
  }

  doSomeTruckFunction() {
    console.log('A truck function')
  }
}

module.exports = Truck
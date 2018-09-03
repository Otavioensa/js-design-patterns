const vehicleFactory = require('./factory')

const calculatePrice = ({ vehicleType, km }) => {
  const vehicle = vehicleFactory({ vehicleType, km })
  return vehicle.calculatePrice()
}

const carParameters = {
  vehicleType: 'car',
  km: 2.3
}

const truckParameters = {
  vehicleType: 'truck',
  km: 2.3
}
const carPrice = calculatePrice(carParameters)
const truckPrice = calculatePrice(truckParameters)

console.log('Car\'s gas price is', carPrice)
console.log('Truck\'s gas price is', truckPrice)
const Car = require('./car')
const Truck = require('./truck')

module.exports = ({ vehicleType, km }) => {
  let Vehicle
  switch(vehicleType) {
    case 'car': 
      Vehicle = Car
      break
    case 'truck':
      Vehicle = Truck
      break
    default:
      break
  }

  return new Vehicle(km)
}
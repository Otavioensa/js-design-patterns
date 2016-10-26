
  var VehicleFactory = require('./factoryPattern');

  var carParams = {
    vehicleType: 'car',
    color: 'red'
  };

  var truckParams = {
    vehicleType: 'truck',
    wheelSize: 'really large'
  };

  var factory = new VehicleFactory();

  console.log('factory: ', factory);

  var car = factory.createVehicle(carParams);
  console.log('car: ', car);
  console.log('factory: ', factory);

  var truck = factory.createVehicle(truckParams);
  console.log('truck: ', truck);
  console.log('factory: ', factory);

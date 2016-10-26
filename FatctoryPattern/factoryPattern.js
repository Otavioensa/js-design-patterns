
  function Car(options) {
    this.doors = options.doors || '4';
    this.state = options.state || 'brand new';
    this.color = options.color || 'Silver';
  }

  function Truck(options) {
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
  }

  function VehicleFactory() {};

  VehicleFactory.prototype.createVehicle = function (options) {

    switch(options.vehicleType) {
      case 'car':
        this.vehicleClass = Car;
        break;
      case 'truck':
        this.vehicleClass = Truck;
        break;
      default:
        this.vehicleClass = Car;
        break;
    }
    return new this.vehicleClass(options);
  };

  module.exports = VehicleFactory;

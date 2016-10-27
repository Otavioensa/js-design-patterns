
  function Vehicle(vehicleParams) {
    this.vehicleType = vehicleParams.type || 'car';
    this.model = vehicleParams.model || 'default';
    this.license = vehicleParams.license || '000.000.1';
  }

  var carParams = {
    model: 'Verona'
  };

  var truckParams = {
    type: 'truck'
  };

  var car = new Vehicle(carParams);

  // a new instancde of vehicle wich
  var truck = new Vehicle(truckParams);

  console.log(car);
  console.log(truck);

  // new functionality we're decorating vehicle with
  truck.setModel = function(modelName) {
      this.model = modelName;
  };

  truck.setColor = function(color) {
    this.color = color;
  };

  truck.setModel('CAT');
  truck.setColor('blue');

  console.log(truck);

### Factory Pattern

Applying:
- When our object or component setup involves a high level of complexity
- When we need to easily generate different instances of objects depending on the environment we are in
- When we're working with many small objects or components that share the same properties
- When composing objects with instances of other objects that need only satisfy an API contract (aka, duck typing) to work. This is useful for decoupling.

By *Javascript Design Patterns*

The factory pattern is a creational pattern. It's really useful for deciding which object should be created given a circunstance lije an environment variable or a decision taken at runtime given circunstancial parameters.

Lets imagine a situation where the gas price per km must be computated. It might vary accordingle to the kind of vehicle. Instead creating a method where the logical layer will check which is the vehicle type and then create it, it can be abstracted by a factory.

Example:
```
const calculatePrice = ({ vehicleType, km }) => {
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

  return new Vehicle(km).calculatePrice()
}
```
 
 It then turns into:

//factory
```
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
```
 
// logical layer
```
const calculatePrice = ({ vehicleType, km }) => {
  const vehicle = vehicleFactory({ vehicleType, km })
  return vehicle.calculatePrice()
}
```

It decouples your application's responsability and makes it easier for testing.
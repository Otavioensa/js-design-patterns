//1) Constructor Pattern

// Object creation
// It uses a definition for a given propertie
function Product(name, price) {
  let _discount = 0;

  this.name = name;
  this.price = price;

  let config = {
    get: () => { return _discount; },
    set: (value) => {
      _discount = value;
      if (_discount > 80) {
        _discount = 80;
      }
    }
  };

  Object.defineProperty(this, 'discount', config);
}

// Object's instance
var water = new Product('water', 50);
water.discount = 85

// it returns the propertie's config of a given object
console.log(Object.getOwnPropertyDescriptor(water,"discount"));
console.log(water.discount);

/***********************************************************************/

// Object creation
// It uses a definition for a multiple properties

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;

  let properties = {
    'fullname': {
      get: () => {
        return `${this.name} ${this.surname}`;
      },
      enumerable: false
    },
    'canDrink': {
      get: () => {
        if(this.age > 18) {
          return 'You can drink';
        }
        return 'You cant drink'
      },
      enumerable: false
    }
  };

  Object.defineProperties(this, properties);
}

var olderPerson = new Person('Otávio', 'Augusto', 24);
var youngerPerson = new Person('Eduardo', 'Almeida', 17);

console.log(olderPerson.fullname);
console.log(olderPerson.canDrink);
console.log(youngerPerson.fullname);
console.log(youngerPerson.canDrink);

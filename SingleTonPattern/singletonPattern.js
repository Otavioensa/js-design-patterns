// singleton pattern

  var mySingletonPattern = (() => {
    let instance;

    function init() {
      // singleton
      // private methods/variables
      let privateVariable = 'some Value';
      let privateRandomNumber = Math.random();

      function privateMethod(value) {
        console.log(value);
      }

      function getPrivateVariable() {
        return privateVariable;
      }

      function getPrivateRandomNumber() {
        return privateRandomNumber;
      }

      return {
        // public method/variables
        getRandomNumber: getPrivateRandomNumber,
        getProperty: getPrivateVariable,
        log: (value) => {
          privateMethod(value);
        }
      };

    }

    return {
      // Get the singleton instance if it exists
      // or create one in case it doesn't
      getInstance: () => {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    };

  })();

  module.exports = mySingletonPattern;

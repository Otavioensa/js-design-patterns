// bad singleton
  var myBadSingleton = (() => {
    let instance;

    function init() {
      //singleton
      let privateRandomNumber = Math.random();

      function getPrivateRandomNumber() {
        return privateRandomNumber;
      }

      return {
          getRandomNumber: getPrivateRandomNumber
      };
    }

    return {
      getInstance: () => {
        instance = init();
        return instance;
      }
    };

  })();

  module.exports = myBadSingleton;

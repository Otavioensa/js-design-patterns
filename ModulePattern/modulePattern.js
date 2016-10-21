// It uses closure mechanism
  var testModule = (() => {
    let counter = 0;

    return {
      test: 'cf',
      incrementCounter: () => {
        counter++;
      },
      resetCounter: () => {
        console.log('Counter\'s value is equal to ', counter);
        counter = 0;
        console.log('Counter\'s value is now reseted');
      }
    }
  })();

  testModule.incrementCounter();
  testModule.resetCounter();
  console.log(testModule.test)

// public/private scope
 var namespace = (() => {
    // a private counter variable
    let myPrivateVar = 0;

    //a private function
    let myPrivateMethod = (value) => {
      console.log(value);
      console.log(myPrivateVar);
    };

    return {
      myPublicVar: 'publicTest',
      myPublicFunction: (value) => {
        myPrivateVar++;
        myPrivateMethod(value);
      }
    }

  })();

  console.log(namespace.myPublicVar);
  namespace.myPublicFunction('Hallo')
  namespace.myPublicFunction('Wie geht\'s?')

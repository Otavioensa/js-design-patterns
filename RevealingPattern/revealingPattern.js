
// Revealing module

  var myRevealingModule = (() => {
    let privateVar = 'Otavio';
    let publicVar = 'A greeting goes here';

    function privateFunction() {
      console.log('Hello, ', privateVar);
    }

    function publicSetName(name) {
      privateVar = name;
    }

    function publicGetName() {
      return privateFunction();
    }

    // reveal public pointers to
    // private functions and properties
    return {
      greeting: publicVar,
      setName: publicSetName,
      getName: publicGetName
    };
  })();


myRevealingModule.setName('Otávio')
console.log(myRevealingModule.greeting)
myRevealingModule.getName();

// Revealing module 2
var mySecondRevealingModule = (() => {
  let privateCounter = 0;

  function privateIncrement() {
    privateCounter++;
  }

  function publicIncrement() {
    privateIncrement();
  }

  function publicGetCount() {
    return privateCounter;
  }

  return {
    increment: publicIncrement,
    count: publicGetCount
  };
})();

console.log(mySecondRevealingModule.count());
mySecondRevealingModule.increment();
console.log(mySecondRevealingModule.count());

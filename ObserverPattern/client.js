
  var MyObservable = require('./ObservableExample');
  var observable = new MyObservable();

  observable.on('hello', (name) => {
    console.log('Welcome, ', name)
  });

  observable.hello('John');

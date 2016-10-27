
  var _ = require('underscore');

  var myMixins = {
    moveUp: () => {
      console.log('Move up!');
    },
    moveDown: () => {
      console.log('Move down!');
    }
  };


  // to get performance we should atribbute
  // only params wich are passed in the constructor
  function CarAnimator(run) {
    this.run = run;
  }

  // if the prop atribbute is not passed
  // through constructor when defining
  // the object we might define the prop
  // this way (to gain performance)
  CarAnimator.prototype.stopped = false;

  // function not defined inside the Object
  // so we get some performance since we're not defining
  // a function every single time you create a new
  // object

  CarAnimator.prototype.moveLeft = function () {
    console.log('Move left!');
  };

  CarAnimator.prototype.moveRight = function () {
    console.log('Move right!');
  };

  CarAnimator.prototype.moving = function (status) {
    CarAnimator.prototype.stopped = status;
  };

  CarAnimator.prototype.isStopped = function () {
    console.log ('Is the car running ? ', CarAnimator.prototype.stopped);
  };


  _.extend(CarAnimator.prototype, myMixins);

  var myAnimator = new CarAnimator();
  myAnimator.moving(true);
  myAnimator.isStopped();
  myAnimator.moveLeft();
  myAnimator.moveUp();
  myAnimator.moveRight();
  myAnimator.moveDown();
  myAnimator.moving(false);
  myAnimator.isStopped();

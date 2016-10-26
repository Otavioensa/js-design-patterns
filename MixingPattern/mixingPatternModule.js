
  var _ = require('underscore');

  var myMixins = {
    moveUp: () => {
      console.log('Move up!');
    },
    moveDown: () => {
      console.log('Move down');
    },
    stop: () => {
      console.log('You shall stop!');
    }
  };

  function CarAnimator() {
    this.moveLeft = () => {
      console.log('Move left');
    },
    this.moveRight = () => {
      console.log('Move right!');
    }
  }

  _.extend(CarAnimator.prototype, myMixins);

  var myAnimator = new CarAnimator();
  myAnimator.moveLeft();
  myAnimator.moveUp();
  myAnimator.moveRight();
  myAnimator.moveDown();
  myAnimator.stop();


  function Macbook () {};

  Macbook.prototype.cost = function () {
    return 997;
  };

  Macbook.prototype.screenSize = function () {
    return 11.6;
  };

  // decorator 1
  function memory(macbook) {
    var cost = macbook.cost();
    macbook.cost = function () {
      return cost + 75;
    };
  }

  // decorator 2
  function engraving(macbook) {
    var cost = macbook.cost();
    macbook.cost = function () {
      return cost + 200;
    };
  }

  // decorator 3
  function insurance(macbook) {
    var cost = macbook.cost();
    macbook.cost = function () {
      return cost + 250;
    };
  }

  var mb = new Macbook();
  memory(mb);
  engraving(mb);
  insurance(mb);

  console.log(mb.cost());
  console.log(mb.screenSize());

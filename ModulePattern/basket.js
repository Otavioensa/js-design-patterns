//basketModule
var basketModule = (() => {
  var basket = [];

  function getItemCount() {
    return basket.length;
  }

  function calculateTotalPrice() {
    let totalPrice = 0;
    basket.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice
  }

  return {
    addItem: (item) => {
      basket.push(item);
    },
    getItemCount: () => {
      return getItemCount();
    },
    getTotalPrice: () => {
      return calculateTotalPrice();
    }
  };

})();

//client implementation
basketModule.addItem({
  product: 'Shampoo',
  price: 4
});

basketModule.addItem({
  product: 'Apple',
  price: 10
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotalPrice());

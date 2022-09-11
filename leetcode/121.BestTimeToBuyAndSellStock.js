// Best time to buy and sell stock

const maxProfits = (prices) => {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

console.log(maxProfits([7, 1, 5, 3, 6, 4]));

/*
1.create a variable with largest decimal
2.create a variable with maxProfit which is zero
3.create a for loop
4.if current price is less then minPrice then minPrice === current price
5.if current price - minPrice is greater then maxProfit. So maxProfit is equal to current price - minPrice
*/

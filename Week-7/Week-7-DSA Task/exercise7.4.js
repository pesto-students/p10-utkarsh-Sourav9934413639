function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = -Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } 
    let profit = prices[i] - minPrice;
    if (profit > maxProfit) {
        maxProfit = profit;
    }
    }
  
    return maxProfit;
  }
  
  let arr1 = [7, 1, 5, 3, 6, 4];
  let maxProfit1=maxProfit(arr1);
  console.log(maxProfit1); // Output: 5
  let arr2 = [7, 6, 4, 3, 1];
  let maxProfit2=maxProfit(arr2); 
  console.log(maxProfit2)// Output: 0
  
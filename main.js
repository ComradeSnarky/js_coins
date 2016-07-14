// Write a program that will convert a dollar amount to the number 
// of coins that make up the amount. 
// Use the common American coins of quarters, dimes, nickels, and pennies.
/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
*/
/*
var object = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  arrayprop: [val4, val5, val6]
};
*/

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  coinPurse.quarters = amount / 0.25
  coinPurse.dimes = amount / 0.10 
  coinPurse.nickels = amount / 0.05 
  coinPurse.pennies = amount / 0.01

  return coinPurse;
}

var coins = coinCounter(0.97)
console.log(coins);


const calculateChange = function (total, cash) {
  let changeRequired = cash - total;
  let change = {};
  coinValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  coinType = ["twentyDollars", "tenDollars", "fiveDollars", "twoDollars", "oneDollar", "quarter", "dime", "nickel", "penny"];
  for (let i = 0; i < coinValue.length; i++) {
    if (Math.floor(changeRequired / coinValue[i]) !== 0) {
      change[coinType[i]] = Math.floor(changeRequired / coinValue[i]);
      changeRequired -= Math.floor(changeRequired / coinValue[i]) * coinValue[i];
    }
  }
  return change;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
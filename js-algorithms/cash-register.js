function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let returned = [];
  let cidCopy = JSON.parse(JSON.stringify(cid));
  let i = 8
  let multiplier = 0;
  const MONEY = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01,
  };

  for (var key in MONEY) {
    var value = MONEY[key];
    multiplier = 0;
    for (change; change >= value && cid[i][1] > 0; change = (change - value).toFixed(2)) {
      multiplier++;
      returned[8-i] = [key, (value * multiplier)];
      cid[i][1] -= value;
    };
    i--
  };

  returned = returned.filter(x => x != null);
  let cidSum = 0;
  for (let j = 0; j < cid.length; j++) {
    cidSum += cid[j][1];
  }

  if (change != 0) {
    return {
      status: 'INSUFFICIENT_FUNDS', 
      change: []
    }
  } else if (cidSum <= 0) {
    return {
      status: 'CLOSED',
      change: cidCopy
    }
  } else {
    return {
      status: 'OPEN',
      change: returned
    }
  }
}
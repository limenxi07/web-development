function convertToRoman(num) {
  var dict = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'VIII': 8,
    'VII': 7,
    'VI': 6,
    'V': 5,
    'IV': 4,
    'I': 1,
  };

  let arr = []
  while (num > 0) {
    for (var key in dict) {
      var value = dict[key];
      if (value > 9) {
        if (num >= value) {
          arr.push(key);
          num -= value;
          break
        }
      } else if (value > 1) {
        if (num == value) {
          arr.push(key);
          num -= value;
          break
        }
      } else {
        arr.push('I');
        num -= 1;
      };
    };
  };
  return arr.join('');
}
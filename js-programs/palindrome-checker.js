function palindrome(str) {
  let formattedStr = str.toLowerCase().replace(/[^a-z0-9]+/gi, "");
  let reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr == reversedStr
}


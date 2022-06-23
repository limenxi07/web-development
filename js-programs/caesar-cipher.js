function rot13(str) {
  let input = str.split('');
  let output = [];
  let ref = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (let i = 0; i < input.length; i++) {
    let index = ref.indexOf(input[i]);
    if (index == -1) {
      output.push(input[i]);
    } else {
      output.push(ref[index + 13]);
    };
  };
  return output.join('');
}
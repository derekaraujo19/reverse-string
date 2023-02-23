function reverseString(str) {
  // create empty string reversed
  let reversed = "";

  // iterate over string
  for (let i = 0; i < str.length; i++) {
    // for each char, set rev to char + empty string
    reversed = str[i] + reversed
  }
  // return rev
  return reversed;


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

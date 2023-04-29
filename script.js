//your JS code here. If required.

function firstNonRepeatedChar(str) {
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // If this is the first and last occurrence of the character in the string, return it
    if (str.indexOf(char) === i && str.lastIndexOf(char) === i) {
      return char;
    }
  }
  
  // If no non-repeated character was found, return null or undefined
  return null;
}


var input=prompt("Enter a string");
const output = firstNonRepeatedChar(input);
alert(output);

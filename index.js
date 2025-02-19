class addNumbers {
    // Method to add numbers from a string
  add(numbers) {
    if (numbers === "") {
      return 0; // Return 0 if the string is empty
    }

    // Split the string by commas or new lines and convert each to a number
    const numArray = numbers.split(/[\n,]+/).map(Number);

    // Sum the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

// Example usage:
const calculator = new addNumbers();
console.log(calculator.add(""));              // Output: 0
console.log(calculator.add("1,2,3"));         // Output: 6
console.log(calculator.add("4\n5\n6"));       // Output: 15
console.log(calculator.add("1,2\n3,4\n5"));   // Output: 15

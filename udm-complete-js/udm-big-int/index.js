// normally int has a limit of 2^53 - 1
// BigInt is a new primitive data type in JavaScript that allows for integers larger than the maximum safe integer.
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt - Primitive Data Type
console.log(900719925474099200000000000n); // BigInt literal
// Creating BigInt using BigInt() function
console.log(BigInt(900719925474099200000000000)); // BigInt from number
console.log(BigInt("900719925474099200000000000")); // BigInt from string
const bigInt1 = BigInt(9007199254740991);
const bigInt2 = 9007199254740991n;

// BigInt Arithmetic - BigInt can be used in arithmetic operations
console.log(bigInt1 + bigInt2); // Addition
console.log(bigInt2 - bigInt1); // Subtraction
console.log(bigInt1 * bigInt2); // Multiplication
console.log(bigInt2 / bigInt1); // Division (returns the integer part)
console.log(bigInt2 % bigInt1); // Modulus
console.log(bigInt1 ** 2n); // Exponentiation

console.log(20n > 15); // true
console.log(20n == "20"); // true, type coercion
console.log(20n === 20); // false, different types
console.log(typeof 20n); // "bigint"

// BigInt cannot be mixed with regular numbers in operations
// console.log(bigInt1 + 10); // This will throw a TypeError
// Correct way: convert number to BigInt
console.log(bigInt1 + BigInt(10)); // 9007199254741001n

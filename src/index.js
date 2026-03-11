const Calculator = require('./calculator');
const { capitalize, reverseString, countWords, isPalindrome } = require('./stringUtils');

// Exemple d'utilisation
const calc = new Calculator();
console.log('=== Exemples de Calculator ===');
console.log(`5 + 3 = ${calc.add(5, 3)}`);
console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
console.log(`6 * 7 = ${calc.multiply(6, 7)}`);
console.log(`20 / 4 = ${calc.divide(20, 4)}`);

console.log('\n=== Exemples de StringUtils ===');
console.log(`capitalize('hello') = "${capitalize('hello')}"`);
console.log(`reverseString('javascript') = "${reverseString('javascript')}"`);
console.log(`countWords('Hello world JavaScript') = ${countWords('Hello world JavaScript')}`);
console.log(`isPalindrome('radar') = ${isPalindrome('radar')}`);
console.log(`isPalindrome('hello') = ${isPalindrome('hello')}`);

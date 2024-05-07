const RationalNumber = require('./index');

// Вводные данные
const numeratorInput = 11;
const denominatorInput = 36;

const rational = new RationalNumber(numeratorInput, denominatorInput);

// Выводим числитель и знаменатель
console.log(`Числитель: ${rational.numerator}`);
console.log(`Знаменатель: ${rational.denominator}`);

// Выводим результат в формате JSON
console.log('Результат в формате JSON:');
console.log(rational.toJSON());

# Web Form Validation Utility

This npm package provides a set of utility functions for validating input values in TypeScript and JavaScript.

## Installation

You can install this package via npm:

```bash
npm web-validation-utils
```

## Usage
Here are some examples of how to use the validation functions provided by this package:
```typescript
import {
  isRequired,
  isEmail,
  minLength,
  maxLength,
  isNumber,
  isPositive,
  isNegative,
  isPhoneNumber,
  isAlphanumeric,
  isDate
} from 'web-validation-utils';

console.log(isRequired('test')); // true
console.log(isRequired('')); // false

console.log(isEmail('test@example.com')); // true
console.log(isEmail('invalid-email')); // false

console.log(minLength('test', 3)); // true
console.log(minLength('te', 3)); // false

console.log(maxLength('test', 5)); // true
console.log(maxLength('testing', 5)); // false

console.log(isNumber(123)); // true
console.log(isNumber('abc')); // false

console.log(isPositive(5)); // true
console.log(isPositive(-5)); // false

console.log(isNegative(-5)); // true
console.log(isNegative(5)); // false

console.log(isPhoneNumber('1234567890')); // true
console.log(isPhoneNumber('123-456-7890')); // false

console.log(isAlphanumeric('abc123')); // true
console.log(isAlphanumeric('abc!123')); // false

console.log(isDate('2024-07-01')); // true
console.log(isDate('invalid-date')); // false
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.


## Credits
This package was created and is maintained by [Pradip Asodariya](https://github.com/AsodariyaP 'Github') 
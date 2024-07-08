/**
 * Checks if a value is defined, not null, and not an empty string.
 * @param value - The value to check.
 * @returns True if the value is required, false otherwise.
 */
export const isRequired = (value: any): boolean => value !== undefined && value !== null && value !== '';

/**
 * Checks if a value is a valid email address.
 * @param value - The value to check.
 * @returns True if the value is a valid email, false otherwise.
 */
export const isEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

/**
 * Checks if a string meets the minimum length requirement.
 * @param value - The string to check.
 * @param length - The minimum length.
 * @returns True if the string meets the minimum length, false otherwise.
 */
export const minLength = (value: string, length: number): boolean => value.length >= length;

/**
 * Checks if a string meets the maximum length requirement.
 * @param value - The string to check.
 * @param length - The maximum length.
 * @returns True if the string meets the maximum length, false otherwise.
 */
export const maxLength = (value: string, length: number): boolean => value.length <= length;

/**
 * Checks if a value is a number.
 * @param value - The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export const isNumber = (value: any): boolean => !isNaN(value);

/**
 * Checks if a number is positive.
 * @param value - The number to check.
 * @returns True if the number is positive, false otherwise.
 */
export const isPositive = (value: number): boolean => value > 0;

/**
 * Checks if a number is negative.
 * @param value - The number to check.
 * @returns True if the number is negative, false otherwise.
 */
export const isNegative = (value: number): boolean => value < 0;

/**
 * Checks if a value is a valid 10-digit phone number.
 * @param value - The value to check.
 * @returns True if the value is a valid phone number, false otherwise.
 */
export const isPhoneNumber = (value: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(value);
};

/**
 * Checks if a string contains only alphanumeric characters.
 * @param value - The string to check.
 * @returns True if the string is alphanumeric, false otherwise.
 */
export const isAlphanumeric = (value: string): boolean => {
  const alphaNumericRegex = /^[a-zA-Z0-9]*$/;
  return alphaNumericRegex.test(value);
};

/**
 * Checks if a string is a valid date.
 * @param value - The value to check.
 * @returns True if the value is a valid date, false otherwise.
 */
export const isDate = (value: string): boolean => !isNaN(Date.parse(value));
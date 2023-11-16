/**
 * Converts a temperature value from Celsius to Fahrenheit.
 *
 * @param {number} celsius - The temperature value in Celsius.
 * @returns {number} - The equivalent temperature value in Fahrenheit.
 * @example
 * const temperatureInCelsius = 20;
 * const temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
 * console.log(temperatureInFahrenheit);
 * // Output: 68
 */
export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

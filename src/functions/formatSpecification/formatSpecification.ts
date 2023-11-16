import {celsiusToFahrenheit} from "@/functions"

/**
 * Formats a specification value based on its key and the specified language.
 *
 * @param {string} key - The key of the specification.
 * @param {any} value - The value of the specification.
 * @param {Locale} language - The language/locale setting.
 * @returns {React.ReactNode} - The formatted specification value as a React node.
 * @example
 * const specificationKey = 'maxTemp';
 * const specificationValue = 25;
 * const language = 'en-US';
 * const formattedSpecification = formatSpecification(specificationKey, specificationValue, language);
 * console.log(formattedSpecification); 
 * // Output: 77ºF
 */
export const formatSpecification = (key: string, value: any, language: Locale): React.ReactNode => {
  switch (key) {
    case 'maxTemp':
      const formattedValue = language === 'en-US' ? celsiusToFahrenheit(value) : value;
      return `${formattedValue}º${language === 'en-US' ? 'F' : 'C'}`;
    case 'power':
      return `${value} kWh`;
    default:
      return value;
  }
};



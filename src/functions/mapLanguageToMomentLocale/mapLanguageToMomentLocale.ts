/**
 * Maps a language code to the corresponding Moment.js locale.
 *
 * @param language - The language code (e.g., 'en-US', 'es-MX', 'pt').
 * @returns The Moment.js locale corresponding to the given language.
 *
 * @example
 * const momentLocale = mapLanguageToMomentLocale('en-US');
 * console.log(momentLocale);
 * // Output: 'en'
 */
export const mapLanguageToMomentLocale = (language: Locale): string => {
  /**
   * The Moment.js locale corresponding to the given language.
   * @type {string}
   */
  switch (language) {
    case 'en-US':
      return 'en';
    case 'es-MX':
      return 'es';
    default:
      return 'pt';
  }
};

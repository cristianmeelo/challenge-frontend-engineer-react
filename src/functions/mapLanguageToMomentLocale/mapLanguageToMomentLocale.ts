/**
 * Maps a language code to the corresponding Moment.js locale.
 *
 * @param {Locale} language - The language code (e.g., 'en-US', 'es-MX', 'pt').
 * @returns {string} - The Moment.js locale corresponding to the given language.
 */
export const mapLanguageToMomentLocale = (language: Locale): string => {
  switch (language) {
    case 'en-US':
      return 'en';
    case 'es-MX':
      return 'es';
    default:
      return 'pt';
  }
};

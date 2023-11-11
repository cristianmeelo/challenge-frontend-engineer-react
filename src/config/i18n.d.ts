const defaultLocale = 'pt-BR';
const langs = [defaultLocale, 'en-US', 'es-MX'] as const;
const locales = langs as unknown as string[];
const i18n = { defaultLocale, locales, localeDetection: true };
type Locale = (typeof langs)[number];

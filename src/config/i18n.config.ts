const defaultLocale = 'pt-BR';

const langs = [defaultLocale, 'en-US', 'es-MX'] as const;

const locales = langs as unknown as string[];
export const i18n = { defaultLocale, locales, localeDetection: true };

export type Locale = (typeof langs)[number];

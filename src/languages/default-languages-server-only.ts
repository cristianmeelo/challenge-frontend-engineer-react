import "server-only";

import { Locale, i18n } from "@/config/i18n.config";

import { defaultLanguage } from "./default-languages";

export const getLanguageServerOnly = (locale: Locale) => {
  return defaultLanguage[locale] ?? defaultLanguage[i18n.defaultLocale as Locale];
};

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { type TTranslationsKeys, type TParams } from './translations.types';

import { en } from './translations-en';
import { pt } from './translations-pt';

const resources = { pt, en };

const i18nInstance = i18next.createInstance();

i18nInstance
  .use(LanguageDetector)
  .init({
    resources,
    preload: ['pt', 'en'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translations',
  })
  .catch((err) => {
    throw err;
  });

export function translate<T>(key: TTranslationsKeys, options?: TParams<T>) {
  return i18nInstance.t(key, options);
}

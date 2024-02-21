import { type TOptions } from 'i18next';

import { type en } from './translations-en';
import { type pt } from './translations-pt';

import { type TRecursiveKeyOf } from '../types';

export type TTranslations = typeof en.translations & typeof pt.translations;

export type TTranslationsKeys = TRecursiveKeyOf<TTranslations>;

export type TParams<T> = TOptions & T;

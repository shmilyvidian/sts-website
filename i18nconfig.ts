import { Locale } from './app/types';

export const defaultLocale: Locale = 'en-US';

export const locales: Locale[] = ['en-US', 'zh-CN'];

export const localeNames: Record<Locale, string> = {
  'en-US': 'English',
  'zh-CN': 'Chinese',
};

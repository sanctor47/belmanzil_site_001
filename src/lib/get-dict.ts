import { dictionary as en } from '@/messages/en';
import { dictionary as ar } from '@/messages/ar';

const dictionaries = { en, ar };

type Locale = 'en' | 'ar';

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries.en;
export const CONTACT_MAIL = 'partners@mousolution.com';

export const CONTACT_REASON_KEYS = [
  'advisory',
  'health',
  'custom',
  'finance',
  'auto',
  'hr',
  'accounting',
  'governance',
  'other',
] as const;

export type ContactReasonKey = (typeof CONTACT_REASON_KEYS)[number];

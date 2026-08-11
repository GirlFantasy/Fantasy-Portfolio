import type { DomainKey } from '@/data/profile';

/**
 * An item's primary domain drives its accent colour — border, numeral, hover
 * tint. First domain in the list wins. See `.accent-*` in global.css.
 */
export const accentClass = (domains: readonly DomainKey[] = []) =>
  `accent-${domains[0] ?? 'data'}`;

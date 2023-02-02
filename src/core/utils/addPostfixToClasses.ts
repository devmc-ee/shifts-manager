export const addPostfixToClasses = (postfix: string, classes: string): string => {
  if (typeof postfix !== 'string' || typeof classes !== 'string') return '';

  if (!postfix.trim()) return classes;

  return classes
    .trim()
    .split(' ')
    .map((item) => (!!item.trim() ? `${item.trim()}__${postfix.trim()}` : ''))
    .join(' ')
    .trim();
};
/**
 * Splits classes string to array and adds to each class (block name) the postfix (element name)
 *
 * @param classes
 * @param postfix
 * @returns
 */
export const getPostfixedClassNamesArray = (classes: string, postfix: string): string[] => {
  if (typeof postfix !== 'string' || typeof classes !== 'string') return [];

  if (!postfix.trim() || !classes.trim()) return [];

  return classes
    .trim()
    .split(' ')
    .map((item) => (!!item.trim() ? `${item.trim()}__${postfix.trim()}` : ''));
};

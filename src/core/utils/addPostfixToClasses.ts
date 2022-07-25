export const addPostfixToClasses = (postfix: string, classes: string): string => {
    if (typeof postfix !== "string" || typeof classes !== "string") return '';

    if (!postfix.trim()) return classes;

    return classes
        .trim()
        .split(' ')
        .map((item) => !!item.trim() ? `${item.trim()}__${postfix.trim()}` : '')
        .join(' ')
        .trim();
}
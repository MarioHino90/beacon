/**
 * Generate an almost-definitely unique id for an element.
 * Prefix is very important for ensuring uniqueness across a document.
 * The probability that all ids generated for a given prefix are unique drops to 99.9% by ~450 instances
 * @param prefix a string to prepend the id with so it can be identified by css selectors or manual inspection
 */
export declare const useId: (prefix: string | undefined) => string;

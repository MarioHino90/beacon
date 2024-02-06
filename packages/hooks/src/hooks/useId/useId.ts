import { useRef } from "react";

/**
 * Generate an almost-definitely unique id for an element.
 * Prefix is very important for ensuring uniqueness across a document.
 * The probability that all ids generated for a given prefix are unique drops to 99.9% by ~450 instances
 * @param prefix a string to prepend the id with so it can be identified by css selectors or manual inspection
 */
export const useId = (prefix: string | undefined): string => {
  const randomPart = useRef<number>(Math.ceil(Math.random() * 10e8));

  return prefix
    ? `${prefix}-${randomPart.current}`
    : randomPart.current.toString();
};

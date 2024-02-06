import { PopperContextInterface } from "../../types";

/**
 * Returns a DOM element by its ID, if `document` global object is defined
 * @param id string that corresponds to DOM id of object desired
 * @returns element that corresponds to the 'id' supplied, if exists
 */
const getElementById = (id: string) => {
  return typeof document !== "undefined" && typeof "window" !== "undefined"
    ? document.getElementById(id)
    : null;
};

export const getElement = ({
  targetRef,
  target,
}: Pick<
  PopperContextInterface,
  "target" | "targetRef"
>): HTMLElement | null => {
  // if targetRef is defined, get the element from it
  if (targetRef?.current) {
    return targetRef.current;
  }

  // if target is defined, get the element using ID
  if (target) {
    return getElementById(target);
  }

  // if neither is defined, return null
  return null;
};

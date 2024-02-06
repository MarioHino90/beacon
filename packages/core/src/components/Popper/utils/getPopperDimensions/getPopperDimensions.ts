import { normalizeDimension } from "../normalizeDimension";

/**
 *
 * @param popperRef
 */
export const getPopperDimensions = (
  popperRef: React.RefObject<HTMLElement>
): [number, number] => {
  // get the dimensions of the Popper element
  const elementHeight = normalizeDimension(
    popperRef.current?.getBoundingClientRect().height || 0
  );
  const elementWidth = normalizeDimension(
    popperRef.current?.getBoundingClientRect().width || 0
  );

  return [elementHeight, elementWidth];
};

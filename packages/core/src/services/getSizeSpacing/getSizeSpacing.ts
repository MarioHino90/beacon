/**
 * gets the spacing size given the text amount
 *
 * @argument size - the size to fetch
 * @returns string - the spacing amount in px
 */
export const getSizeSpacing = (
  size: undefined | "none" | "compact" | "comfortable"
): string => {
  switch (size) {
    case "none":
      return "0";
    case "compact":
      return "8px";
    case "comfortable":
    default:
      return "16px";
  }
};

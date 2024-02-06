export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** indicates that the button should be visually and functionally disabled */
  disabled?: boolean;
  /** visual variant for the link component */
  variant?: "table" | "inline";
  /** indicates that the link is call to action link */
  isCTA?: boolean;
  /** indicates that external link icon should be displayed for external link */
  showExternalLinkIcon?: boolean;
}

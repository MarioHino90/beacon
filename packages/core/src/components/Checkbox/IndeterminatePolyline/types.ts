export interface IndeterminatePolylineProps
  extends React.SVGAttributes<SVGPolylineElement> {
  /** indicates that the checkbox is in an indeterminate state, see: https://css-tricks.com/indeterminate-checkboxes/ */
  indeterminate?: boolean;
}

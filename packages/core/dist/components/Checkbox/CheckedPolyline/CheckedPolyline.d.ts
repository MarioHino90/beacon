/// <reference types="react" />
export interface CheckedPolylineProps extends React.SVGAttributes<SVGPolylineElement> {
    /** indicates whether the radio button should be marked as checked */
    checked?: boolean;
    /** indicates that the checkbox is in an indeterminate state, see: https://css-tricks.com/indeterminate-checkboxes/ */
    indeterminate?: boolean;
}
export declare const CheckedPolyline: import("styled-components").StyledComponent<"polyline", any, {
    className: string;
    points: string;
} & CheckedPolylineProps, "className" | "points">;

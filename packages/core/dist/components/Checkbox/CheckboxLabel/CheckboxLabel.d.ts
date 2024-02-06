/// <reference types="react" />
import { LabelProps } from "../../Label";
export interface CheckboxLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** indicates whether the radio button should be disabled */
    disabled?: boolean;
}
export declare const CheckboxLabel: import("styled-components").StyledComponent<({ className, ...props }: LabelProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, LabelProps & CheckboxLabelProps, keyof LabelProps>;

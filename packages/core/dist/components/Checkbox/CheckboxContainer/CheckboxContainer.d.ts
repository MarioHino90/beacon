/// <reference types="react" />
export interface CheckboxContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** indicates whether the radio button should be disabled */
    disabled?: boolean;
}
export declare const CheckboxContainer: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & CheckboxContainerProps, "className">;

/// <reference types="react" />
export declare type VerticalInputSize = "sm" | "md";
export interface InputGroupContextInterface {
    /** indicates that the input group and the contained input value are disabled */
    disabled?: boolean;
    /** takes up 100% of the width of the container */
    fullWidth?: boolean;
    /** indicates that the input group and the contained input value are invalid */
    invalid?: boolean;
    /** vertical size for input box */
    vSize?: VerticalInputSize;
}
export interface InputGroupContextProviderProps extends InputGroupContextInterface {
    /** child elements to be rendered inside the component tree */
    children?: React.ReactNode | React.ReactNode[];
}

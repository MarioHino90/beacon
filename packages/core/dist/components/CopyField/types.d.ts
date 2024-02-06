/// <reference types="react" />
import { InputProps } from "../Input";
export interface CopyFieldProps extends InputProps {
    /** class name for the container component */
    containerClassName?: string;
    /** text to be rendered in the tooltip before the copy button has been clicked */
    copyTooltipText?: string;
    /** function to be invoked when a user clicks on the copy button */
    onCopyClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** function to be invoked when a user clicks on input */
    onInputClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    /** indicates that the copy text should be shown in the button */
    showTextInButton?: boolean;
    /** z-index to use for the copy button (the tooltip will use `zIndex + 1`) */
    zIndex?: number;
}
export interface StyledCopyFieldProps extends React.HTMLAttributes<HTMLElement> {
    /** indicates that the copy text should be shown in the button */
    showTextInButton?: boolean;
    /** z-index to use for the copy button (the tooltip will use `zIndex + 1`)*/
    zIndex?: number;
}

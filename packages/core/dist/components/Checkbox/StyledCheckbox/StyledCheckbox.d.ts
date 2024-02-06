/// <reference types="react" />
export interface StyledCheckboxProps<E = HTMLInputElement> extends React.HTMLAttributes<E> {
    /** indicates whether the checkbox should be marked as checked */
    checked?: boolean;
    /** indicates whether the checkbox should be marked as invalid */
    invalid?: boolean;
    /** indicates whether the checkbox should be disabled */
    disabled?: boolean;
    /** DOM id for the checkbox */
    id?: string;
    /** indicates that the checkbox is in an indeterminate state, see: https://css-tricks.com/indeterminate-checkboxes/ */
    indeterminate?: boolean;
    /** DOM name for the checkbox; a group of checkboxs affecting the same input should have the same 'name' prop */
    name?: string;
    /** value to be passed to the change event */
    value?: string | number;
    /** testing id for Cypress purposes */
    "data-testid"?: string;
}
export declare const StyledCheckbox: import("styled-components").StyledComponent<"div", any, StyledCheckboxProps<HTMLInputElement>, never>;

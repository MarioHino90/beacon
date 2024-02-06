/// <reference types="react" />
export interface CollapsibleContextInterface {
    /** indicates that the collapsible is currently open */
    isOpen: boolean;
    /** toggles isOpen state back and forth */
    toggle: () => void;
}
export interface CollapsibleContextProviderProps extends Partial<CollapsibleContextInterface> {
    /** children to be rendered inside a collapsible */
    children?: React.ReactNode | React.ReactNode[];
}

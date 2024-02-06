import { ReactNode } from "react";
export interface TabsContextInterface {
    /** callback to handle updating the current tab */
    handleChange: (id: string | number) => void;
    /** callback to handle action on key press */
    handleKeyPress: (id: string | number, event: React.KeyboardEvent) => void;
}
export interface TabsContextProviderProps {
    /** callback to handle updating the tab */
    onChange: (id: string | number) => void;
    /** component children */
    children: ReactNode | ReactNode[];
}

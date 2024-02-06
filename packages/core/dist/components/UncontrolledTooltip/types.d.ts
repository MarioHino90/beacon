/// <reference types="react" />
import { TooltipProps } from "../Tooltip";
export interface UncontrolledTooltipProps<E = HTMLElement> extends Omit<TooltipProps<E>, "isOpen" | "onOpen" | "onClose" | "target"> {
    /** children to be passed into component; must be a single child or will throw error */
    children?: React.ReactNode;
    /** value to be displayed inside the tooltip */
    label: string;
}

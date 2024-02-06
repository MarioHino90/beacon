/// <reference types="react" />
import { TooltipProps } from "../Tooltip";
export declare type Variants = "info" | "warning" | "error";
export interface AnnotationProps<E = HTMLElement> extends Omit<TooltipProps<E>, "children" | "isOpen" | "onOpen" | "onClose" | "target">, StyledAnnotationProps {
    /** indicates whether the annotation tooltip and its icon should be visible */
    disabled?: boolean;
    /** value to be displayed inside the tooltip */
    label: string;
}
export interface StyledAnnotationProps<E = HTMLElement> extends React.HTMLAttributes<E> {
    variant?: Variants;
}

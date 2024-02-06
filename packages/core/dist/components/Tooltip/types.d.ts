/// <reference types="react" />
import { FlattenInterpolation, FlattenSimpleInterpolation, ThemedStyledProps } from "styled-components";
import { PopperProps } from "../Popper";
interface BaseStyledTooltipProps extends React.HTMLAttributes<HTMLElement> {
}
export interface StyledTooltipProps<T extends Record<string, unknown> = {}> extends BaseStyledTooltipProps {
    /** prop to interpolate the returned value of a `css` call within styled-components */
    styledCss?: FlattenSimpleInterpolation | FlattenInterpolation<ThemedStyledProps<{}, T>> | FlattenInterpolation<ThemedStyledProps<BaseStyledTooltipProps, T>>;
}
export interface TooltipProps<E = HTMLElement> extends Pick<StyledTooltipProps, "style" | "styledCss">, Omit<PopperProps<E>, "tipVariant"> {
    /** class name to be passed to the parent popper element */
    popperClassName?: string;
    /** DOM id to be passed to the parent popper element */
    popperId?: string;
}
export {};

/// <reference types="react" />
import { SpacingType } from "@braze/beacon-theme";
import { FlattenInterpolation, FlattenSimpleInterpolation, ThemedStyledProps } from "styled-components";
import { FlexSpecs } from "../Flex";
import { BoxSpecs } from "../Box";
export interface FlexBoxProps extends StyledFlexBoxProps {
}
interface BaseStyledFlexBoxProps extends React.HTMLAttributes<HTMLDivElement>, FlexSpecs {
    /** element / component to render as flex box */
    as?: React.ElementType;
    /** option that defines margin */
    boxMargin?: BoxSpecs | SpacingType;
    /** option that defines padding */
    boxPadding?: BoxSpecs | SpacingType;
}
export interface StyledFlexBoxProps<T extends Record<string, unknown> = {}> extends BaseStyledFlexBoxProps {
    /** prop to interpolate the returned value of a `css` call within styled-components */
    styledCss?: FlattenSimpleInterpolation | FlattenInterpolation<ThemedStyledProps<{}, T>> | FlattenInterpolation<ThemedStyledProps<BaseStyledFlexBoxProps, T>>;
}
export {};

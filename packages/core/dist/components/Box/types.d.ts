/// <reference types="react" />
import { SpacingType } from "@braze/beacon-theme";
import { FlattenInterpolation, FlattenSimpleInterpolation, ThemedStyledProps } from "styled-components";
export declare type BoxSpecs = SideSpecs | HorizontalSpecs | VerticalSpecs | ConvenienceSpecs;
export interface BoxProps extends StyledBoxProps {
}
interface BaseStyledBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * indicates which tag the component should render as */
    as?: React.ElementType;
    /**
     * option that defines margin */
    boxMargin?: BoxSpecs | SpacingType;
    /**
     * option that defines padding */
    boxPadding?: BoxSpecs | SpacingType;
    /**
     * indicates that 'inline-block' should be used for display */
    inline?: boolean;
}
export interface StyledBoxProps<T extends Record<string, unknown> = {}> extends BaseStyledBoxProps {
    /**
     * prop to interpolate the returned value of a `css` call within styled-components */
    styledCss?: FlattenSimpleInterpolation | FlattenInterpolation<ThemedStyledProps<{}, T>> | FlattenInterpolation<ThemedStyledProps<BaseStyledBoxProps, T>>;
}
interface HorizontalSpecs {
    /**
     * spacing for the left and right side of the box */
    horizontal: SpacingType;
    /**
     * spacing for the top side of the box */
    top?: SpacingType;
    /**
     * spacing for the bottom side of the box */
    bottom?: SpacingType;
    /**
     * spacing for the top and bottom side of the box */
    vertical?: never;
    /**
     * spacing for the left side of the box */
    left?: never;
    /**
     * spacing for the right side of the box */
    right?: never;
}
interface VerticalSpecs {
    /**
     * spacing for the top and bottom side of the box */
    vertical: SpacingType;
    /**
     * spacing for the left side of the box */
    left?: SpacingType;
    /**
     * spacing for the right side of the box */
    right?: SpacingType;
    /**
     * spacing for the left and right side of the box */
    horizontal?: never;
    /**
     * spacing for the top side of the box */
    top?: never;
    /**
     * spacing for the bottom side of the box */
    bottom?: never;
}
interface SideSpecs {
    /**
     * spacing for the left side of the box */
    left?: SpacingType;
    /**
     * spacing for the right side of the box */
    right?: SpacingType;
    /**
     * spacing for the top side of the box */
    top?: SpacingType;
    /**
     * spacing for the bottom side of the box */
    bottom?: SpacingType;
    /**
     * spacing for the top and bottom side of the box */
    vertical?: never;
    /**
     * spacing for the left and right side of the box */
    horizontal?: never;
}
interface ConvenienceSpecs {
    /**
     * spacing for the left side of the box */
    left?: never;
    /**
     * spacing for the right side of the box */
    right?: never;
    /**
     * spacing for the top side of the box */
    top?: never;
    /**
     * spacing for the bottom side of the box */
    bottom?: never;
    /**
     * spacing for the top and bottom side of the box */
    vertical?: SpacingType;
    /**
     * spacing for the left and right side of the box */
    horizontal?: SpacingType;
}
export {};

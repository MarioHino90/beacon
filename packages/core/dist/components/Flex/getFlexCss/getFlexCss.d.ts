import { CSSObject } from "styled-components";
import { AlignItems, FlexDirection, FlexWrap, JustifyContent, TextAlign, FlexSpecs } from "../types";
export declare function getAlignItemsCss(alignItems?: AlignItems): CSSObject;
export declare function getFlexDirectionCss(flexDirection?: FlexDirection): CSSObject;
export declare function getFlexWrapCss(flexWrap?: FlexWrap): {
    flexWrap: FlexWrap | undefined;
};
export declare function getJustifyContentCss(justifyContent?: JustifyContent): CSSObject;
export declare function getTextAlignCss(textAlign?: TextAlign): CSSObject;
export declare function getFlexDisplayCss(inline?: boolean): CSSObject;
export declare const getFlexCss: ({ alignItems, direction, justifyContent, inline, textAlign, wrap, }: FlexSpecs) => CSSObject;

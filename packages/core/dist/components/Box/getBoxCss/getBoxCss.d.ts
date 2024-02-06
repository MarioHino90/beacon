import { CSSObject } from "styled-components";
import { Props } from "@braze/beacon-styling";
import { SpacingType } from "@braze/beacon-theme";
import { BoxSpecs } from "../types";
/**
 * Calculates the specs for spacing
 *
 * @param header the css property that is being calculated for
 * @param specs the spacing information
 * @param props the props containing `theme`
 *
 * @return the calculated specs
 */
export declare const getSpecs: (header: "margin" | "padding", specs: BoxSpecs | SpacingType | undefined, props?: Props) => CSSObject;
/**
 * Creates box styling for a component using token styles
 *
 * @param margin the styling options for margin
 * @param padding the styling options for padding
 * @param props the props containing `theme`
 *
 * @return the styles as CSSProperties
 */
export declare const getBoxCss: (margin: BoxSpecs | SpacingType | undefined, padding: BoxSpecs | SpacingType | undefined, props: Props) => CSSObject;

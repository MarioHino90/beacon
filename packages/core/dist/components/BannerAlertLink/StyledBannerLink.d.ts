import { StyledLinkProps } from "./types";
/**
 * get the link color to display for a specific intent
 *
 * @param intent - the intent to get the color for
 *
 * @return the color of the link
 */
export declare const getIntentColor: (props: import("../BannerAlert/types").IntentColorArgs) => string;
/**
 * get the link color to display on hover for a specific intent
 *
 * @param intent - the intent to get the color for
 *
 * @return the color of the link on hover
 */
export declare const getIntentHoverColor: (props: import("../BannerAlert/types").IntentColorArgs) => string;
export declare const StyledBannerLink: import("styled-components").StyledComponent<"a", any, {
    className: string;
} & import("../Link").LinkProps & StyledLinkProps, "className">;

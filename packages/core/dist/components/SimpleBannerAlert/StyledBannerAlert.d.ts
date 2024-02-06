import { StyledSimpleBannerAlertProps } from "./types";
/**
 * get the color to display for a specific intent
 * @param intent - the intent to get the color for
 * @return the color to display
 */
export declare const getIntentColor: (props: import("../BannerAlert/types").IntentColorArgs) => string;
export declare const StyledBannerAlert: import("styled-components").StyledComponent<"div", any, StyledSimpleBannerAlertProps, never>;

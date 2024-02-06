import React from "react";
import { BrazeIconName } from "../Icon";
import { Intent } from "../BannerAlert";
import { BannerAlertIconProps } from "./types";
/**
 * get the icon to display for a specific intent
 *
 * @param intent - the intent to get an icon for
 *
 * @return the name of the icon to display
 */
export declare const getIcon: (intent: Intent) => BrazeIconName;
export declare const BannerAlertIcon: {
    ({ intent, }: BannerAlertIconProps): React.ReactElement;
    displayName: string;
};

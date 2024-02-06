import { ReactNode } from "react";
import { Intent } from "../BannerAlert";
export interface BannerAlertBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    /** children to display inside component */
    children?: ReactNode | ReactNode[];
    /** icon to display */
    Icon?: ReactNode;
    /** function to call on close */
    onClose?: () => void;
    /** visual banner intents */
    intent?: Intent;
}
export interface StyledBannerBodyWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    /** is a close button being rendered */
    hasClose: boolean;
}

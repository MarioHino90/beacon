/// <reference types="react" />
import { Intent } from "../BannerAlert";
export interface SimpleBannerAlertProps {
    /** children to be rendered inside banner alert */
    children?: React.ReactNode | React.ReactNode[];
    /** visual banner intent */
    intent?: Intent;
    /** the class name of the component */
    className?: string;
}
export interface StyledSimpleBannerAlertProps {
    /** indicates if the accordion is open */
    isAccordionOpen?: boolean;
    /** visual banner intent */
    intent: Intent;
}

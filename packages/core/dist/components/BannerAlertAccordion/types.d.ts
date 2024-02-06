/// <reference types="react" />
import { Intent } from "../BannerAlert";
export interface BannerAlertAccordionProps {
    /** children to render within the component */
    children?: React.ReactNode | React.ReactNode[];
    /** indicates if the accordion should be shown */
    isOpen: boolean;
    /** the class name of the component */
    className?: string;
    /** the accordion visual intent */
    intent?: Intent;
}
export interface StyledAccordionProps {
    /** the accordion intent to display */
    intent: Intent;
}

/// <reference types="react" />
import { Intent } from "../BannerAlert";
export interface UntransitionedBannerAlertProps {
    /**
     * children to be rendered inside the component */
    children?: React.ReactNode | React.ReactNode[];
    /**
     * visual banner intent */
    intent: Intent;
    /**
     * the class name of the component */
    className?: string;
}

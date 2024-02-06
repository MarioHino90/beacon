import React from "react";
export interface PortalProps extends React.HTMLAttributes<HTMLDivElement> {
    /** DOM node override to use portal into */
    node?: React.RefObject<HTMLDivElement>;
}

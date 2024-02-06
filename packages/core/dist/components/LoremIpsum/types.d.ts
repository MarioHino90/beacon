import React from "react";
export interface LoremIpsumProps extends React.HTMLAttributes<HTMLDivElement> {
    /** number of lipsum paragraphs to render */
    paragraphs?: number;
}

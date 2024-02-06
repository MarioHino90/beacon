import React from "react";
import { LoremIpsumProps } from ".";
declare const _default: {
    title: string;
    component: ({ className, paragraphs, ...props }: LoremIpsumProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            page: any;
        };
    };
};
export default _default;
export declare const BasicUse: {
    (): React.ReactElement;
    storyName: string;
};
export declare const SecondaryUse: {
    (args: LoremIpsumProps): React.ReactElement;
    args: {
        paragraphs: number;
    };
    storyName: string;
};

import React from "react";
import { SpacingType } from "@braze/beacon-theme";
import { PanelProps } from ".";
declare const _default: {
    title: string;
    component: ({ className, background, ...props }: PanelProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            page: any;
        };
    };
    argTypes: {
        inset: {
            mapping: {
                [size: string]: SpacingType;
            };
            control: {
                type: string;
                options: SpacingType[];
                labels: {
                    [size: string]: SpacingType;
                };
            };
        };
        textAlign: {
            mapping: {
                center: string;
                left: string;
                right: string;
            };
            control: {
                type: string;
                options: string[];
                labels: {
                    center: string;
                    left: string;
                    right: string;
                };
            };
        };
    };
};
export default _default;
export declare const BasicUse: {
    (args: PanelProps): React.ReactElement;
    args: {
        inset: string;
    };
    storyName: string;
};
export declare const NoHeader: {
    (): React.ReactElement;
    storyName: string;
};
export declare const Stacking: {
    (): React.ReactElement;
    storyName: string;
};
export declare const TextAlignment: {
    (args: PanelProps): React.ReactElement;
    args: {
        textAlign: string;
    };
    storyName: string;
};
export declare const LightBackground: {
    (): React.ReactElement;
    storyName: string;
};
export declare const LightBackgroundWithFormElements: {
    (): React.ReactElement;
    storyName: string;
};

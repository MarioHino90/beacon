import React from "react";
import type { FlexBoxProps } from "./types";
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<FlexBoxProps & React.RefAttributes<HTMLDivElement>>;
    parameters: {
        docs: {
            page: any;
        };
    };
    argTypes: {
        justifyContent: {
            options: string[];
            mapping: {
                flexStart: string;
                flexEnd: string;
                spaceBetween: string;
                spaceEvenly: string;
                spaceAround: string;
            };
            control: {
                type: string;
                labels: {
                    flexStart: string;
                    flexEnd: string;
                    spaceBetween: string;
                    spaceEvenly: string;
                    spaceAround: string;
                };
            };
        };
        alignItems: {
            options: string[];
            mapping: {
                stretch: string;
                flexStart: string;
                flexEnd: string;
                center: string;
                baseline: string;
            };
            control: {
                type: string;
                labels: {
                    stretch: string;
                    flexStart: string;
                    flexEnd: string;
                    center: string;
                    baseline: string;
                };
            };
        };
        direction: {
            options: string[];
            mapping: {
                column: string;
                columnReverse: string;
                row: string;
                rowReverse: string;
            };
            control: {
                type: string;
                labels: {
                    column: string;
                    columnReverse: string;
                    row: string;
                    rowReverse: string;
                };
            };
        };
        textAlign: {
            options: string[];
            mapping: {
                center: string;
                left: string;
                right: string;
                justify: string;
            };
            control: {
                type: string;
                labels: {
                    center: string;
                    left: string;
                    right: string;
                    justify: string;
                };
            };
        };
        wrap: {
            options: string[];
            mapping: {
                wrap: string;
                nowrap: string;
                wrapReverse: string;
            };
            control: {
                type: string;
                labels: {
                    wrap: string;
                    nowrap: string;
                    wrapReverse: string;
                };
            };
        };
        as: {
            type: string;
        };
    };
};
export default _default;
export declare const BasicUse: {
    (args: FlexBoxProps): React.ReactElement;
    args: {};
    storyName: string;
};
export declare const JustifyContent: {
    (args: FlexBoxProps): React.ReactElement;
    args: {
        justifyContent: string;
    };
    storyName: string;
};
export declare const AlignItems: {
    (args: FlexBoxProps): React.ReactElement;
    args: {
        alignItems: string;
    };
    storyName: string;
};
export declare const Direction: {
    (args: FlexBoxProps): React.ReactElement;
    args: {
        direction: string;
    };
    storyName: string;
};
export declare const Inline: {
    (args: FlexBoxProps): React.ReactElement;
    storyName: string;
};
export declare const TextAlignment: {
    ({ textAlign, }: FlexBoxProps): React.ReactElement;
    storyName: string;
};
export declare const Wrap: {
    ({ wrap }: FlexBoxProps): React.ReactElement;
    storyName: string;
};
export declare const CombinedProps: {
    (args: FlexBoxProps): React.ReactElement;
    args: {
        justifyContent: string;
        alignItems: string;
        direction: string;
        wrap: string;
        inline: boolean;
        textAlign: string;
    };
    storyName: string;
};
export declare const AsAnotherElement: {
    (args: FlexBoxProps): React.ReactElement;
    storyName: string;
};
export declare const CustomStyling: {
    (args: FlexBoxProps): React.ReactElement;
    storyName: string;
};

import React from "react";
import type { FlexProps } from "./types";
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>>;
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
    };
};
export default _default;
export declare const BasicUse: {
    (args: FlexProps): React.ReactElement;
    args: {};
    storyName: string;
};
export declare const JustifyContent: {
    (args: FlexProps): React.ReactElement;
    args: {
        justifyContent: string;
    };
    storyName: string;
};
export declare const AlignItems: {
    (args: FlexProps): React.ReactElement;
    args: {
        alignItems: string;
    };
    storyName: string;
};
export declare const Direction: {
    (args: FlexProps): React.ReactElement;
    args: {
        direction: string;
    };
    storyName: string;
};
export declare const Inline: {
    (args: FlexProps): React.ReactElement;
    storyName: string;
};
export declare const TextAlignment: {
    ({ textAlign, }: FlexProps): React.ReactElement;
    storyName: string;
};
export declare const Wrap: {
    ({ wrap }: FlexProps): React.ReactElement;
    storyName: string;
};
export declare const CombinedProps: {
    (args: FlexProps): React.ReactElement;
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
export declare const InvalidCustomStyles: {
    ({ invalidStyle, }: {
        invalidStyle: string;
    }): React.ReactElement;
    argTypes: {
        invalidStyle: {
            options: string[];
            type: string;
        };
    };
    args: {
        invalidStyle: string;
    };
    storyName: string;
};

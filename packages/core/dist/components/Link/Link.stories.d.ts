import React from "react";
import { LinkProps } from ".";
declare const _default: {
    title: string;
    component: import("styled-components").StyledComponent<"a", any, {
        className: string;
    } & LinkProps, "className">;
    argTypes: {
        variant: {
            mapping: {
                undefined: undefined;
                table: string;
                inline: string;
            };
            control: {
                type: string;
                labels: {
                    undefined: undefined;
                    table: string;
                    inline: string;
                };
            };
        };
        disabled: {
            type: string;
        };
    };
    parameters: {
        docs: {
            page: any;
        };
    };
};
export default _default;
export declare const BasicUse: {
    (args: LinkProps): React.ReactElement;
    args: {
        disabled: boolean;
    };
    storyName: string;
};
export declare const TableVariant: {
    (args: LinkProps): React.ReactElement;
    storyName: string;
};
export declare const InlineVariant: {
    (): React.ReactElement;
    storyName: string;
};
export declare const DisabledUse: {
    (): React.ReactElement;
    storyName: string;
};

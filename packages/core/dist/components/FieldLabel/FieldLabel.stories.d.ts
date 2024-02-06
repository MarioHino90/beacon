import React from "react";
import { FieldLabelProps } from ".";
declare const _default: {
    title: string;
    component: ({ children, className, enforce, formatLabel, helpText, label, status, statusText, boxProps, infoIconVariant, infoIconPopoverContent, infoIconTriggerVariant, controlRef, ...props }: FieldLabelProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            page: any;
        };
    };
};
export default _default;
export declare const BasicUse: {
    ({ tooltipDisplay, ...args }: FieldLabelProps & {
        tooltipDisplay: "text" | "react" | undefined;
    }): React.ReactElement;
    args: {
        label: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    argTypes: {
        enforce: {
            options: string[];
            mapping: {
                optional: string;
                required: string;
                none: undefined;
            };
            control: {
                type: string;
                labels: {
                    optional: string;
                    required: string;
                    none: string;
                };
            };
        };
        status: {
            options: string[];
            mapping: {
                success: string;
                danger: string;
                none: undefined;
            };
            control: {
                type: string;
                labels: {
                    success: string;
                    danger: string;
                    none: string;
                };
            };
        };
        tooltipDisplay: {
            options: string[];
            mapping: {
                text: string;
                react: string;
            };
            control: {
                type: string;
                labels: {
                    text: string;
                    react: string;
                };
            };
        };
    };
    storyName: string;
};
export declare const Accessibility: {
    (): React.ReactElement;
    storyName: string;
};
export declare const HelperText: {
    (args: FieldLabelProps): React.ReactElement;
    args: {
        label: string;
        helpText: string;
    };
    storyName: string;
};
export declare const SuccessText: {
    (args: FieldLabelProps): React.ReactElement;
    args: {
        label: string;
        statusText: string;
    };
    storyName: string;
};
export declare const ErrorText: {
    (args: FieldLabelProps): React.ReactElement;
    args: {
        label: string;
        statusText: string;
    };
    storyName: string;
};
export declare const Optional: {
    (): React.ReactElement;
    storyName: string;
};
export declare const Required: {
    (): React.ReactElement;
    storyName: string;
};
export declare const StackedFields: {
    (args: FieldLabelProps): React.ReactElement;
    args: {
        status: string;
        statusText: string;
    };
    storyName: string;
};
export declare const Formatlabel: {
    (): React.ReactElement;
    storyName: string;
};
export declare const InfoIconPopover: {
    (): React.ReactElement;
    storyName: string;
};
export declare const InfoIconPopoverWithAmbiguousChildren: {
    (): React.ReactElement;
    storyName: string;
};

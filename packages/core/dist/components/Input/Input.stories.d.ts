import React from "react";
import { InputProps } from ".";
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
    parameters: {
        docs: {
            page: any;
        };
    };
    argTypes: {
        defaultValue: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const BasicUse: {
    ({ defaultValue }: InputProps): React.ReactElement;
    args: {
        defaultValue: string;
    };
    storyName: string;
};
export declare const WithDefaultValue: {
    ({ defaultValue, }: InputProps): React.ReactElement;
    args: {
        defaultValue: string;
    };
    storyName: string;
};
/**
 * This story is used to verify that when the user uncontrollably re-renders the component
 * by passing in a new ref or a new onChange every render, it still preserves the
 * typing state
 */
export declare const UncontrolledRerendering: {
    ({ defaultValue, }: InputProps): React.ReactElement;
    args: {
        defaultValue: string;
    };
    storyName: string;
};
export declare const Disabled: {
    (): React.ReactElement;
    storyName: string;
};
export declare const Invalid: {
    (): React.ReactElement;
    storyName: string;
};
export declare const FullWidth: {
    (): React.ReactElement;
    storyName: string;
};
export declare const VerticalSize: {
    (): React.ReactElement;
    storyName: string;
};
export declare const Label: {
    (): React.ReactElement;
    storyName: string;
};
export declare const TypeNumber: {
    (): React.ReactElement;
    storyName: string;
};
export declare const TypeDate: {
    (): React.ReactElement;
    storyName: string;
};

import React from "react";
import { InlineInputState, Actions, InlineInputProps } from "./types";
export declare const initialState: InlineInputState;
export declare const reducer: (state: InlineInputState, action: Actions) => InlineInputState;
export declare const InlineInput: {
    ({ children, disabled, invalid, onChange, onSaveClick, onCancelClick, onClearClick, placeholder, vSize, value, ...props }: InlineInputProps): React.ReactElement;
    displayName: string;
};

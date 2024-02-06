import { InputProps } from "../Input";
import { VerticalInputSize } from "../InputGroupContext";

export type PrevValue = string | readonly string[] | number | undefined;

export type TransitionState = "waiting" | "canceling" | "clearing";

export type Actions =
  | SetEditModeAction
  | SetPrevValueAction
  | SetIsCancelingAction
  | SaveAction
  | CancelAction
  | CancelCompleteAction
  | ClearAction
  | ClearCompleteAction;

export interface InlineInputProps
  extends Omit<InlineInputEditModeProps, "children" | "inputRef">,
    Pick<InlineInputViewModeProps, "children"> {
  /** placeholder to render inside a component when no 'value' is defined; required for UX purposes */
  placeholder: string;
}

export interface InlineInputState {
  isEditing: boolean;
  prevValue: PrevValue;
  transitionState: TransitionState;
}

interface SetEditModeAction {
  type: "SET_EDIT_MODE";
  value: boolean;
}

interface SetPrevValueAction {
  type: "SET_PREV_VALUE";
  value: PrevValue;
}

interface SetIsCancelingAction {
  type: "IS_CANCELING";
  value: boolean;
}

interface SaveAction {
  type: "SAVE_ACTION";
  value: PrevValue;
}

interface CancelAction {
  type: "CANCEL_ACTION";
}

interface CancelCompleteAction {
  type: "CANCEL_COMPLETE_ACTION";
}

interface ClearAction {
  type: "CLEAR_ACTION";
}

interface ClearCompleteAction {
  type: "CLEAR_COMPLETE_ACTION";
}

export type OnChangeAction = "change" | "save" | "cancel" | "clear";

export interface InlineInputEditModeProps
  extends Pick<StyledInlineInputEditModeProps, "vSize">,
    Omit<InputProps, "onChange"> {
  /** DOM id to be passed into the input as well as into the label as htmlFor */
  inputId?: string;
  /** ref object to be passed into the input field */
  inputRef?: React.RefObject<HTMLInputElement>;
  /** ref object to be passed into the input field */
  saveButtonRef?: React.RefObject<HTMLButtonElement>;
  /** ref object to be passed into the input field */
  cancelButtonRef?: React.RefObject<HTMLButtonElement>;
  /** callback invoked when user makes a change to values; use second `action` param to determine additional behavior (e.g. when to communicate with backend, etc.) */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    action: OnChangeAction
  ) => void;
  /** callback invoked when save button is clicked */
  onSaveClick?: (event: React.MouseEvent) => void;
  /** callback invoked when cancel button is clicked */
  onCancelClick?: (event: React.MouseEvent) => void;
  /** callback invoked when clear icon is clicked */
  onClearClick?: (event: React.MouseEvent) => void;
}

export interface StyledInlineInputEditModeProps
  extends React.HTMLAttributes<HTMLElement> {
  /** indicates that a value is defined */
  isValueDefined?: boolean;
  /** vertical size of the input field */
  vSize?: VerticalInputSize;
}

export interface InlineInputViewModeRenderProps {
  /** value to be rendered in plaintext */
  value: string | number | readonly string[];
  /** indicates that the value currently shown is the placeholder */
  isPlaceholder: boolean;
}

export interface InlineInputViewModeProps
  extends Omit<StyledInlineInputViewModeProps, "children"> {
  /** render function that returns children to be displayed in view mode */
  children?: React.ReactNode;
  /** placeholder to be shown to user inside an empty input */
  placeholder?: string;
  /** value to be rendered in plaintext */
  value?: string | number | readonly string[];
}

export interface StyledInlineInputViewModeProps
  extends React.HTMLAttributes<HTMLElement> {
  /** indicates that the component is disabled */
  disabled?: boolean;
  /** vertical size of the input field */
  vSize?: VerticalInputSize;
}

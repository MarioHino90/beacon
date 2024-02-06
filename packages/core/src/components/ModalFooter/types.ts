import {
  StyledButtonGroupPropsAlign,
  StyledButtonGroupPropsNoAlign,
} from "../ButtonGroup";

export type ModalFooterProps = StyledModalFooterProps;

export type StyledModalFooterProps =
  | Omit<StyledButtonGroupPropsNoAlign, "direction">
  | Omit<StyledButtonGroupPropsAlign, "direction">;

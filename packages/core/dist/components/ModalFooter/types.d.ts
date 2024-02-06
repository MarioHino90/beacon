import { StyledButtonGroupPropsAlign, StyledButtonGroupPropsNoAlign } from "../ButtonGroup";
export declare type ModalFooterProps = StyledModalFooterProps;
export declare type StyledModalFooterProps = Omit<StyledButtonGroupPropsNoAlign, "direction"> | Omit<StyledButtonGroupPropsAlign, "direction">;

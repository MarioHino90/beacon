import { FlexProps } from "../Flex";
export declare type ButtonGroupProps = StyledButtonGroupProps;
export declare type StyledButtonGroupProps = StyledButtonGroupPropsNoAlign | StyledButtonGroupPropsAlign;
interface BaseStyledButtonGroupProps extends FlexProps {
}
export interface StyledButtonGroupPropsNoAlign extends BaseStyledButtonGroupProps {
    /** indicates that the component is being used as an aligner */
    aligner?: false;
    /** indicates side of the parent footer to align items to, if defined */
    side?: never;
}
export interface StyledButtonGroupPropsAlign extends BaseStyledButtonGroupProps {
    /** indicates that the component is being used as an aligner */
    aligner?: true;
    /** indicates side of the parent footer to align items to, if defined */
    side?: "left" | "right";
}
export {};

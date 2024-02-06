import { BodyTextProps } from "../BodyText";
export interface HelpTextProps extends StyledHelpTextProps {
}
export interface StyledHelpTextProps extends Omit<BodyTextProps, "variant" | "size"> {
    /** indicates that the field associated to the help text is disabled */
    disabled?: boolean;
}

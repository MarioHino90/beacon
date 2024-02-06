import { TabProps } from "../Tab";
export interface UncontrolledTabProps extends Omit<TabProps, "active" | "onChange" | "onKeyPress"> {
}

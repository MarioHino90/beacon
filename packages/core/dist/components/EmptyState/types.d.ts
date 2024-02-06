import { FlexBoxProps } from "../FlexBox";
export interface EmptyStateProps extends Omit<FlexBoxProps, "direction" | "justifyContent" | "alignItems" | "boxPadding"> {
}

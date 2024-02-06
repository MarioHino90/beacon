import { BoxProps } from "../Box";

export interface EmptyStateTextProps
  extends Omit<BoxProps, "direction" | "boxPadding"> {}

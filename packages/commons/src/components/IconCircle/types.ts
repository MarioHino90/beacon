import { IntentColorType } from "@braze/beacon-styling";

export interface IconCircleProps extends Partial<StyledIconCircleProps> {}

export interface StyledIconCircleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** intent of the icon representing the type of information that should be conveyed */
  intent: IntentColorType;
}

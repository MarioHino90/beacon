import { ButtonProps } from "../Button";
import { Intent } from "../BannerAlert";

export interface BannerAlertActionProps
  extends Omit<ButtonProps, "variant" | "intent"> {
  /** * the visual intent */
  intent?: Intent;
}

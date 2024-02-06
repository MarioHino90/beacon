import { BrazeIconProps } from "../BrazeIcon";
import { MenuButtonProps } from "../MenuButton";

export interface MenuCategoryButtonProps extends MenuButtonProps {
  /** heading to be displayed in the button */
  heading?: string;
  /** name of spot icon to be rendered, if any */
  iconName?: BrazeIconProps["name"];
}

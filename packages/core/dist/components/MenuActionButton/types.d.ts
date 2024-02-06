import { IconProps } from "../Icon";
import { MenuButtonProps } from "../MenuButton";
export interface MenuActionButtonProps extends MenuButtonProps {
    /** name of font awesome icon to be rendered, if any */
    iconName?: IconProps["name"];
}

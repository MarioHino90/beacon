import { Intent } from "../BannerAlert";
import { FlexBoxProps } from "../FlexBox";
export interface BannerAlertIconProps {
    intent: Intent;
}
export interface StyledBannerIconProps extends FlexBoxProps {
    intent: Intent;
}

import styled from "styled-components";

import { FlexBox } from "../FlexBox";
import { createGetIntentColor } from "../BannerAlert/getIntentColor";

import { StyledBannerIconProps } from "./types";

export const getIntentBackgroundColor = createGetIntentColor(100);

export const StyledBannerIcon = styled(FlexBox)<StyledBannerIconProps>`
  height: 24px;
  width: 24px;

  border-radius: 100%;
  background: ${getIntentBackgroundColor};

  font-size: ${({ intent }) => (intent === "danger" ? "10px;" : "8px")};
`;

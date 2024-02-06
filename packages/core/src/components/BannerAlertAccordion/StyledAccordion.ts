import styled from "styled-components";
import { getSpacing, getRGBAValue } from "@braze/beacon-styling";

import { createGetIntentColor } from "../BannerAlert/getIntentColor";

import { StyledAccordionProps } from "./types";

/**
 * get the background color to display for a specific intent
 *
 * @param intent - the intent to get the color for
 *
 * @return the color of the accordion background
 */
const getIntentBackgroundColor = createGetIntentColor(50);

export const StyledAccordion = styled.div<StyledAccordionProps>`
  padding: ${getSpacing("xl")};

  background: ${(props) => getRGBAValue(getIntentBackgroundColor(props), 0.5)};
`;

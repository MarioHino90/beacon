import styled from "styled-components";

import { StyledButtonGroup } from "../ButtonGroup";

import { StyledModalFooterProps } from "./types";

const getAttrs = () => ({ direction: "row" });

export const StyledModalFooter = styled(StyledButtonGroup).attrs(
  getAttrs
)<StyledModalFooterProps>``;

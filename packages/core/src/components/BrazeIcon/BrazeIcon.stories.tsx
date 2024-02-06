import React from "react";
import { ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import page from "./BrazeIcon.docs.mdx";

import { BrazeIcon, BrazeIconProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Icons/BrazeIcon",
  component: BrazeIcon,
  parameters: {
    docs: { page },
  },
} as ComponentMeta<typeof BrazeIcon>;

const StyledDiv = styled.div`
  background: gray;
  padding: 20px;
  width: fit-content;
`;

export const BasicUse = (args: BrazeIconProps): React.ReactElement => {
  return (
    <StyledDiv>
      <BrazeIcon {...args} />
    </StyledDiv>
  );
};

BasicUse.args = { name: "campaign-comparison" };

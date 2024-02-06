import React from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import page from "./CloseButton.docs.mdx";

import { CloseButton, CloseButtonProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Primitives/CloseButton",
  component: CloseButton,
  parameters: {
    docs: { page },
  },
} as ComponentMeta<typeof CloseButton>;

export const BasicUse = (args: CloseButtonProps): React.ReactElement => {
  return <CloseButton {...args} onClick={action("click!")} />;
};

BasicUse.args = { size: "sm" };

export const LargeUse = (args: CloseButtonProps): React.ReactElement => {
  return <CloseButton {...args} onClick={action("click!")} />;
};

LargeUse.args = { size: "lg" };

import React from "react";

import page from "./LoremIpsum.docs.mdx";

import { LoremIpsum, LoremIpsumProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Text/LoremIpsum",
  component: LoremIpsum,
  parameters: {
    docs: { page },
  },
};

export const BasicUse = (): React.ReactElement => {
  return <LoremIpsum />;
};

BasicUse.storyName = "basic use";

export const SecondaryUse = (args: LoremIpsumProps): React.ReactElement => {
  return <LoremIpsum {...args} />;
};

SecondaryUse.args = {
  paragraphs: 2,
};

SecondaryUse.storyName = "secondary use";

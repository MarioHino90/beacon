import React from "react";

import page from "./Label.docs.mdx";

import { Label } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Text/Label",
  component: Label,
  parameters: {
    docs: { page },
  },
};

export const BasicUse = (): React.ReactElement => {
  return <Label>This is a basic label</Label>;
};

BasicUse.storyName = "basic use";

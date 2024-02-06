import React from "react";
import { IntentColorType } from "@braze/beacon-styling";

import page from "./IconCircle.docs.mdx";

import { IconCircle } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Commons/Icons/IconCircle",
  component: IconCircle,
  parameters: {
    docs: { page },
  },
};

export const BasicUse = ({
  intent,
}: {
  intent: IntentColorType | "default";
}) => {
  const actualIntent = intent === "default" ? undefined : intent;

  return <IconCircle intent={actualIntent} />;
};

BasicUse.storyName = "basic use";

BasicUse.argTypes = {
  intent: {
    options: ["info", "warning", "success", "danger", "primary", "default"],
  },
};

BasicUse.args = {
  intent: "info",
};

export const DangerUse = () => {
  return <IconCircle intent="danger" />;
};

DangerUse.storyName = "danger use";

export const SuccessUse = () => {
  return <IconCircle intent="success" />;
};

SuccessUse.storyName = "success use";

export const WarningUse = () => {
  return <IconCircle intent="warning" />;
};

WarningUse.storyName = "warning use";

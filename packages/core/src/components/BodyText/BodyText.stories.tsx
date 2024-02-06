import React from "react";

import { LoremIpsum } from "../LoremIpsum";

import page from "./BodyText.docs.mdx";

import { BodyText, BodyTextProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Text/BodyText",
  component: BodyText,
  parameters: {
    docs: { page },
  },
};

interface DefaultCaseArgs extends Omit<BodyTextProps, "variant" | "size"> {
  variant: BodyTextProps["variant"] | "default";
  size: BodyTextProps["size"] | "default";
}

export const DefaultCase = ({ variant, size, ...rest }: DefaultCaseArgs) => {
  const actualVariant = variant === "default" ? undefined : variant;
  const actualSize = size === "default" ? undefined : size;

  return (
    <BodyText {...rest} variant={actualVariant} size={actualSize}>
      <LoremIpsum paragraphs={4} />
    </BodyText>
  );
};

DefaultCase.argTypes = {
  fontFamily: {
    control: { type: "radio" },
    options: ["base", "code"],
  },
  fontWeight: {
    control: { type: "radio" },
    options: ["regular", "bold"],
  },
  variant: {
    control: { type: "radio" },
    options: ["default", "success", "danger", "warning", "info", "hint"],
  },
  size: {
    control: { type: "radio" },
    options: ["default", "md", "sm", "label"],
  },
};

DefaultCase.args = {
  fontFamily: "base",
  fontWeight: "bold",
  size: "md",
  variant: "default",
};

export const UsageExample = () => {
  return (
    <BodyText size="md" variant="info" hidden={false}>
      <LoremIpsum />
    </BodyText>
  );
};

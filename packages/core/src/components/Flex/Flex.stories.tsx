import React from "react";

import { Box } from "../Box";
import { LoremIpsum } from "../LoremIpsum";

import page from "./Flex.docs.mdx";
import type { FlexProps } from "./types";

import { Flex } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Layout/Flex",
  component: Flex,
  parameters: {
    docs: { page },
  },
  argTypes: {
    justifyContent: {
      options: [
        "center",
        "flexStart",
        "flexEnd",
        "spaceBetween",
        "spaceEvenly",
        "spaceAround",
      ],
      mapping: {
        flexStart: "flex-start",
        flexEnd: "flex-end",
        spaceBetween: "space-between",
        spaceEvenly: "space-evenly",
        spaceAround: "space-around",
      },
      control: {
        type: "select",
        labels: {
          flexStart: "flex-start",
          flexEnd: "flex-end",
          spaceBetween: "space-between",
          spaceEvenly: "space-evenly",
          spaceAround: "space-around",
        },
      },
    },
    alignItems: {
      options: ["stretch", "flexStart", "flexEnd", "center", "baseline"],
      mapping: {
        stretch: "stretch",
        flexStart: "flex-start",
        flexEnd: "flex-end",
        center: "center",
        baseline: "baseline",
      },
      control: {
        type: "select",
        labels: {
          stretch: "stretch",
          flexStart: "flex-start",
          flexEnd: "flex-end",
          center: "center",
          baseline: "baseline",
        },
      },
    },
    direction: {
      options: ["column", "columnReverse", "row", "rowReverse"],
      mapping: {
        column: "column",
        columnReverse: "column-reverse",
        row: "row",
        rowReverse: "row-reverse",
      },
      control: {
        type: "select",
        labels: {
          column: "column",
          columnReverse: "column-reverse",
          row: "row",
          rowReverse: "row-reverse",
        },
      },
    },
    textAlign: {
      options: ["center", "left", "right", "justify"],
      mapping: {
        center: "center",
        left: "left",
        right: "right",
        justify: "justify",
      },
      control: {
        type: "select",
        labels: {
          center: "center",
          left: "left",
          right: "right",
          justify: "justify",
        },
      },
    },
    wrap: {
      options: ["wrap", "nowrap", "wrapReverse"],
      mapping: {
        wrap: "wrap",
        nowrap: "nowrap",
        wrapReverse: "wrap-reverse",
      },
      control: {
        type: "select",
        labels: {
          wrap: "wrap",
          nowrap: "nowrap",
          wrapReverse: "wrap-reverse",
        },
      },
    },
  },
};

export const BasicUse = (args: FlexProps): React.ReactElement => {
  return (
    <Flex style={{ background: "pink", minHeight: "200px" }} {...args}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
    </Flex>
  );
};

BasicUse.args = {};

BasicUse.storyName = "basic use";

export const JustifyContent = (args: FlexProps): React.ReactElement => {
  return (
    <Flex {...args} style={{ background: "pink", minHeight: "200px" }}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
    </Flex>
  );
};

JustifyContent.args = {
  justifyContent: "center",
};

JustifyContent.storyName = "justify content";

export const AlignItems = (args: FlexProps): React.ReactElement => {
  return (
    <Flex style={{ background: "pink", minHeight: "200px" }} {...args}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
    </Flex>
  );
};

AlignItems.args = {
  alignItems: "center",
};

AlignItems.storyName = "align items";

export const Direction = (args: FlexProps): React.ReactElement => {
  return (
    <Flex style={{ background: "pink", minHeight: "200px" }} {...args}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
    </Flex>
  );
};

Direction.args = {
  direction: "column",
};

Direction.storyName = "direction";

export const Inline = (args: FlexProps): React.ReactElement => {
  return (
    <Flex inline style={{ background: "pink", minHeight: "200px" }} {...args}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
    </Flex>
  );
};

Inline.storyName = "inline";

export const TextAlignment = ({
  textAlign = "center",
}: FlexProps): React.ReactElement => {
  return (
    <Flex
      textAlign={textAlign}
      style={{ background: "pink", minHeight: "200px" }}
      direction="column"
    >
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
    </Flex>
  );
};

TextAlignment.storyName = "text alignment";

export const Wrap = ({ wrap = "wrap" }: FlexProps): React.ReactElement => {
  return (
    <Flex wrap={wrap} style={{ background: "pink", minHeight: "200px" }}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        <LoremIpsum />
      </Box>
    </Flex>
  );
};

Wrap.storyName = "wrap";

export const CombinedProps = (args: FlexProps): React.ReactElement => {
  return (
    <Flex style={{ background: "pink", minHeight: "200px" }} {...args}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        <LoremIpsum />
      </Box>
    </Flex>
  );
};

CombinedProps.args = {
  justifyContent: "center",
  alignItems: "center",
  direction: "column",
  wrap: "wrap",
  inline: false,
  textAlign: "right",
};

CombinedProps.storyName = "combined props";

export const InvalidCustomStyles = ({
  invalidStyle,
}: {
  invalidStyle: string;
}): React.ReactElement => {
  const outerStyle =
    invalidStyle === "none"
      ? {
          background: "pink",
          minHeight: "200px",
        }
      : {
          background: "pink",
          minHeight: "200px",
          [invalidStyle]: "25px",
        };

  return (
    <Flex inline style={outerStyle}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
    </Flex>
  );
};

InvalidCustomStyles.argTypes = {
  invalidStyle: {
    options: [
      "none",
      "margin",
      "padding",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
    ],
    type: "select",
  },
};

InvalidCustomStyles.args = {
  invalidStyle: "padding",
};

InvalidCustomStyles.storyName = "invalid custom styles";

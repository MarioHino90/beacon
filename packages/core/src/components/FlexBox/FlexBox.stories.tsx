import React from "react";
import { css } from "styled-components";

import { BodyText } from "../BodyText";
import { Box } from "../Box";
import { LoremIpsum } from "../LoremIpsum";

import page from "./FlexBox.docs.mdx";
import type { FlexBoxProps } from "./types";

import { FlexBox } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Layout/FlexBox",
  component: FlexBox,
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
    as: {
      type: "text",
    },
  },
};

export const BasicUse = (args: FlexBoxProps): React.ReactElement => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: "#008294",
      }}
      {...args}
    >
      <FlexBox
        boxMargin="md"
        style={{ background: "pink", minHeight: "200px" }}
      >
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Hi
        </Box>
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Hello
        </Box>
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Test
        </Box>
      </FlexBox>
    </div>
  );
};

BasicUse.args = {};

BasicUse.storyName = "basic use";

export const JustifyContent = (args: FlexBoxProps): React.ReactElement => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: "#008294",
        width: "100%",
      }}
    >
      <FlexBox
        boxMargin={{ left: "sm", right: "lg", top: "xxl", bottom: "xs" }}
        {...args}
        style={{ background: "pink", minHeight: "200px" }}
      >
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Hi
        </Box>
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Hello
        </Box>
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Test
        </Box>
      </FlexBox>
    </div>
  );
};

JustifyContent.args = {
  justifyContent: "center",
};

JustifyContent.storyName = "justify content";

export const AlignItems = (args: FlexBoxProps): React.ReactElement => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: "#008294",
      }}
    >
      <FlexBox
        boxMargin={{ horizontal: "md", top: "xxl", bottom: "xs" }}
        boxPadding={{ vertical: "sm", left: "xxxl", right: "lg" }}
        style={{ background: "pink", minHeight: "200px" }}
        {...args}
      >
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Hi
        </Box>
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Hello
        </Box>
        <Box
          boxPadding="sm"
          boxMargin="sm"
          style={{ border: "1px solid black" }}
        >
          Test
        </Box>
      </FlexBox>
    </div>
  );
};

AlignItems.args = {
  alignItems: "center",
};

AlignItems.storyName = "align items";

export const Direction = (args: FlexBoxProps): React.ReactElement => {
  return (
    <FlexBox style={{ background: "pink", minHeight: "200px" }} {...args}>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hi
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Hello
      </Box>
      <Box boxPadding="sm" boxMargin="sm" style={{ border: "1px solid black" }}>
        Test
      </Box>
    </FlexBox>
  );
};

Direction.args = {
  direction: "column",
};

Direction.storyName = "direction";

export const Inline = (args: FlexBoxProps): React.ReactElement => {
  return (
    <FlexBox
      inline
      style={{ background: "pink", minHeight: "200px" }}
      {...args}
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
    </FlexBox>
  );
};

Inline.storyName = "inline";

export const TextAlignment = ({
  textAlign = "center",
}: FlexBoxProps): React.ReactElement => {
  return (
    <FlexBox
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
    </FlexBox>
  );
};

TextAlignment.storyName = "text alignment";

export const Wrap = ({ wrap = "wrap" }: FlexBoxProps): React.ReactElement => {
  return (
    <FlexBox wrap={wrap} style={{ background: "pink", minHeight: "200px" }}>
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
    </FlexBox>
  );
};

Wrap.storyName = "wrap";

export const CombinedProps = (args: FlexBoxProps): React.ReactElement => {
  return (
    <FlexBox style={{ background: "pink", minHeight: "200px" }} {...args}>
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
    </FlexBox>
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

export const AsAnotherElement = (args: FlexBoxProps): React.ReactElement => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: "#008294",
      }}
    >
      <FlexBox
        boxMargin="md"
        boxPadding="xl"
        style={{
          border: "1px solid",
          borderColor: "#D32F4C",
        }}
        as="section"
        {...args}
      >
        <BodyText>I need spacing!</BodyText>
      </FlexBox>
    </div>
  );
};

AsAnotherElement.storyName = "as another element";

export const CustomStyling = (args: FlexBoxProps): React.ReactElement => {
  const styledCss = css`
    border: 1px solid;
    border-color: #d32f4c;
    background-color: palegoldenrod;
  `;

  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: "#008294",
      }}
    >
      <FlexBox boxMargin="md" boxPadding="xl" styledCss={styledCss} {...args}>
        <BodyText>This has custom styling via styled components</BodyText>
      </FlexBox>
    </div>
  );
};

CustomStyling.storyName = "custom styling";

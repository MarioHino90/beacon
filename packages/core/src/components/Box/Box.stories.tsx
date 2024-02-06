import React from "react";
import { getColor } from "@braze/beacon-styling";
import theme from "@braze/beacon-theme";
import { css } from "styled-components";

import { BodyText } from "../BodyText";

import { Box } from "./Box";
import { BoxSpecs, getBoxCss } from "./getBoxCss";
import page from "./Box.docs.mdx";

import { BoxProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Layout/Box",
  component: Box,
  parameters: { docs: { page } },
};

export const BasicUse = ({ inline }: BoxProps) => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: getColor("lightBlue", 500)({ theme }),
      }}
    >
      <Box
        boxMargin="md"
        boxPadding="xl"
        style={{
          border: "1px solid",
          borderColor: getColor("red", 500)({ theme }),
        }}
        inline={inline}
      >
        <BodyText>I need spacing!</BodyText>
      </Box>
    </div>
  );
};

BasicUse.args = {
  inline: false,
};

export const MultipleSizes = () => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: getColor("lightBlue", 500)({ theme }),
      }}
    >
      <Box
        boxMargin={{ left: "sm", right: "md", top: "xxl", bottom: "sm" }}
        boxPadding={{ left: "xl", right: "lg", top: "xs", bottom: "md" }}
        style={{
          border: "1px solid",
          borderColor: getColor("red", 500)({ theme }),
        }}
      >
        <BodyText>I need spacing!</BodyText>
      </Box>
    </div>
  );
};

export const ConvenienceSizes = () => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: getColor("lightBlue", 500)({ theme }),
      }}
    >
      <Box
        boxMargin={{ horizontal: "md", top: "xxl", bottom: "xs" }}
        boxPadding={{ vertical: "sm", left: "xxxl", right: "lg" }}
        style={{
          border: "1px solid",
          borderColor: getColor("red", 500)({ theme }),
        }}
      >
        <BodyText>I need spacing!</BodyText>
      </Box>
    </div>
  );
};

export const Inline = () => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: getColor("lightBlue", 500)({ theme }),
      }}
    >
      <Box
        boxMargin="md"
        boxPadding="xl"
        style={{
          border: "1px solid",
          borderColor: getColor("red", 500)({ theme }),
        }}
        inline
      >
        <BodyText>I am inline!</BodyText>
      </Box>
    </div>
  );
};

export const OtherStyling = () => {
  const otherCss = css`
    background-color: aliceblue;
  `;

  return (
    <div
      className="wrapper-display"
      style={{
        border: "1px solid",
        borderColor: getColor("lightBlue", 500)({ theme }),
      }}
    >
      <Box
        boxMargin="lg"
        boxPadding="sm"
        style={{
          border: "1px solid",
          borderColor: getColor("red", 500)({ theme }),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        styledCss={otherCss}
      >
        <BodyText
          style={{
            border: "1px solid",
            borderColor: getColor("green", 500)({ theme }),
          }}
        >
          Flex Box 1!
        </BodyText>
        <BodyText
          style={{
            border: "1px solid",
            borderColor: getColor("green", 500)({ theme }),
            height: "100px",
          }}
        >
          Flex Box 2!
        </BodyText>
        <BodyText
          style={{
            border: "1px solid",
            borderColor: getColor("green", 500)({ theme }),
          }}
        >
          Flex Box 3!
        </BodyText>
      </Box>
    </div>
  );
};

export const SpacingWithoutBox = () => {
  const margin = "sm";
  const padding: BoxSpecs = {
    left: "xxl",
    right: "lg",
    top: "md",
    bottom: "xs",
  };
  const boxStyles = getBoxCss(margin, padding, { theme });

  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: getColor("lightBlue", 500)({ theme }),
      }}
    >
      <div
        style={{
          ...boxStyles,
          border: "1px solid",
          borderColor: getColor("red", 500)({ theme }),
        }}
      >
        <BodyText>I need spacing!</BodyText>
      </div>
    </div>
  );
};

export const AsAnotherElement = () => {
  return (
    <div
      className="wrapper-display"
      style={{
        display: "inline-block",
        border: "1px solid",
        borderColor: getColor("lightBlue", 500)({ theme }),
      }}
    >
      <Box
        boxMargin="md"
        boxPadding="xl"
        style={{
          border: "1px solid",
          borderColor: getColor("red", 500)({ theme }),
        }}
        as="section"
      >
        <BodyText>I need spacing!</BodyText>
      </Box>
    </div>
  );
};

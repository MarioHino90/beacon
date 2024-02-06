import React from "react";

import docs from "./Heading.docs.mdx";
import { Heading } from "./Heading";
import { HeadingProps } from "./types";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Text/Heading",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const BasicUse = ({ level, variant }: HeadingProps) => {
  return (
    <div style={{ background: "pink", padding: "10px", borderRadius: "5px" }}>
      <Heading level={level} variant={variant}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    </div>
  );
};

BasicUse.argTypes = {
  level: {
    options: [1, 2, 3, 4, 5, 6],
    control: { type: "select" },
  },
  variant: {
    options: ["default", "light"],
    control: { type: "select" },
  },
};

BasicUse.args = {
  level: 1,
  variant: "default",
};

BasicUse.storyName = "basic use";

export const LevelOne = ({ variant }: HeadingProps) => {
  return (
    <Heading level={1} variant={variant}>
      The Quick Brown Fox Jumps Over The Lazy Dog
    </Heading>
  );
};

LevelOne.argTypes = {
  variant: {
    options: ["default", "light"],
    control: { type: "select" },
  },
};

LevelOne.args = {
  variant: "default",
};

LevelOne.storyName = "level one";

export const LevelTwo = ({ variant }: HeadingProps) => {
  return (
    <Heading level={2} variant={variant}>
      The Quick Brown Fox Jumps Over The Lazy Dog
    </Heading>
  );
};

LevelTwo.argTypes = {
  variant: {
    options: ["default", "light"],
    control: { type: "select" },
  },
};

LevelTwo.args = {
  variant: "default",
};

LevelTwo.storyName = "level two";

export const LevelThree = ({ variant }: HeadingProps) => {
  return (
    <Heading level={3} variant={variant}>
      The Quick Brown Fox Jumps Over The Lazy Dog
    </Heading>
  );
};

LevelThree.argTypes = {
  variant: {
    options: ["default", "light"],
    control: { type: "select" },
  },
};

LevelThree.args = {
  variant: "default",
};

LevelThree.storyName = "level three";

export const LevelFour = ({ variant }: HeadingProps) => {
  return (
    <Heading level={4} variant={variant}>
      The Quick Brown Fox Jumps Over The Lazy Dog
    </Heading>
  );
};

LevelFour.argTypes = {
  variant: {
    options: ["default", "light"],
    control: { type: "select" },
  },
};

LevelFour.args = {
  variant: "default",
};

LevelFour.storyName = "level four";

export const LevelFive = ({ variant }: HeadingProps) => {
  return (
    <Heading level={5} variant={variant}>
      The Quick Brown Fox Jumps Over The Lazy Dog
    </Heading>
  );
};

LevelFive.argTypes = {
  variant: {
    options: ["default", "light"],
    control: { type: "select" },
  },
};

LevelFive.args = {
  variant: "default",
};

LevelFive.storyName = "level five";

export const LevelSix = ({ variant }: HeadingProps) => {
  return (
    <Heading level={6} variant={variant}>
      The Quick Brown Fox Jumps Over The Lazy Dog
    </Heading>
  );
};

LevelSix.argTypes = {
  variant: {
    options: ["default", "light"],
    control: { type: "select" },
  },
};

LevelSix.args = {
  variant: "default",
};

LevelSix.storyName = "level six";

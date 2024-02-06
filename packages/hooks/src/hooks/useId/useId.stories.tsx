import React from "react";

import docs from "./useId.docs.mdx";

import { useId } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Hooks/useId",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

interface StoryProps {
  prefix?: string;
}

export const BasicUse = ({ prefix }: StoryProps) => {
  const generatedId = useId(prefix);

  return (
    <div id={generatedId} className="id-location">
      Generated id: <span id="generated-id">{generatedId}</span>
    </div>
  );
};

BasicUse.argTypes = {
  prefix: {
    control: { type: "text" },
  },
};

BasicUse.args = {
  prefix: "demo-prefix",
};

BasicUse.storyName = "basic use";

export const NoPrefix = () => {
  const generatedId = useId(undefined);

  return (
    <div id={generatedId} className="id-location">
      Generated id: <span id="generated-id">{generatedId}</span>
    </div>
  );
};

NoPrefix.storyName = "no prefix";

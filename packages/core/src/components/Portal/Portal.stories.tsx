import React, { useState } from "react";

import { BodyText } from "../BodyText";
import { Heading } from "../Heading";
import { Button } from "../Button";

import page from "./Portal.docs.mdx";

import { Portal } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Portal",
  component: Portal,
  parameters: {
    docs: { page },
  },
};

export const BasicUse = (): React.ReactElement => {
  return (
    <div>
      <Heading level={2}>Portal</Heading>
      <BodyText>See bottom of page for the rendered component</BodyText>
      <Portal>
        A <code>Portal</code> is a helper wrapper for{" "}
        <code>React.createPortal</code>. This portal is rendered at the bottom
        of the page.
      </Portal>
    </div>
  );
};

BasicUse.storyName = "basic use";

export const Unmount = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Heading level={2}>Portal</Heading>
      <BodyText>See bottom of page for the rendered component</BodyText>
      <div>
        <Button onClick={() => setIsOpen(!isOpen)}>
          Click to Toggle Portal
        </Button>
        {isOpen ? (
          <Portal>
            A <code>Portal</code> is a helper wrapper for{" "}
            <code>React.createPortal</code>. This portal is rendered at the
            bottom of the page.
          </Portal>
        ) : null}
      </div>
    </div>
  );
};

Unmount.storyName = "unmount";

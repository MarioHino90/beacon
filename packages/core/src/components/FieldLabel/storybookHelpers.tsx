import React from "react";

import { PopoverHeading } from "../PopoverHeading";
import { PopoverBody } from "../PopoverBody";
import { BodyText } from "../BodyText";
import { Link } from "../Link";

export const infoIconPopoverTextContent =
  "Can be used across push, email, and in-app messages to send a rendered copy of the message.";

export const infoIconPopoverReactContent = (
  <>
    <PopoverHeading>Content test groups</PopoverHeading>
    <PopoverBody>
      <BodyText size="sm">
        Create Content Test Groups{" "}
        <Link
          href="http://example.com"
          target="_blank"
          rel="noreferrer noopener"
          variant="inline"
        >
          here
        </Link>
        . Groups must have Content Test property enabled in order to send test
        messages.
        <br />
        <br />
        <Link
          href="http://example.com"
          target="_blank"
          rel="noreferrer noopener"
          variant="inline"
        >
          Learn more about Content Test Groups
        </Link>
      </BodyText>
    </PopoverBody>
  </>
);

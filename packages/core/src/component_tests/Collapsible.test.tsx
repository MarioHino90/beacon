/* eslint-disable jest/expect-expect */
import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { collapsible } from "@braze/beacon-test-utils";

import { Collapsible } from "../components/Collapsible";
import { CollapsibleButton } from "../components/CollapsibleButton";
import { CollapsibleBody } from "../components/CollapsibleBody";
import { CollapsibleList } from "../components/CollapsibleList";
import { CollapsibleListItem } from "../components/CollapsibleListItem";

const context = makeContext("Collapsible", {
  collapsible,
});

const Wrapper = ({ alignment, isOpen, toggle }: any) => {
  return (
    <Collapsible isOpen={isOpen} toggle={toggle} alignment={alignment}>
      <CollapsibleButton>
        {`${isOpen ? "Hide" : "Show"} Advancement Details`}
      </CollapsibleButton>
      <CollapsibleBody>
        <CollapsibleList heading="Users will advance to the next steps when any one of the following conditions are met:">
          <CollapsibleListItem>The email is sent</CollapsibleListItem>
          <CollapsibleListItem>The content card is sent</CollapsibleListItem>
        </CollapsibleList>
      </CollapsibleBody>
    </Collapsible>
  );
};

describe("Collapsible", () => {
  it("should not crash without any 'alignment', 'isOpen', or 'toggle' props defined", () => {
    mountWithTheme(<Wrapper />);

    // collapsible should be visible to start
    context.collapsible.should("be.visible");

    // attempt to click on the button
    context.collapsible.actions.clickButton();

    // collapsible should remain visible
    context.collapsible.should("be.visible");
  });
});

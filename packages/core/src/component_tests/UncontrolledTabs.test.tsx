/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React, { useState } from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { tabs, tabContent } from "@braze/beacon-test-utils";

import { UncontrolledTabs } from "../components/UncontrolledTabs";
import { UncontrolledTab } from "../components/UncontrolledTab";
import { TabContent } from "../components/TabContent";
import { UncontrolledTabsContextProvider } from "../components/UncontrolledTabsContext";

const context = makeContext("BannerAlert", {
  tabs,
  tabContent,
});

const Wrapper = ({ onChange }: any) => {
  const [activeTab, setActiveTab] = useState<string | number>(1);

  const handleChange = (tabId) => {
    setActiveTab(tabId);

    onChange?.(tabId);
  };

  return (
    <UncontrolledTabsContextProvider defaultTab={1} onChange={handleChange}>
      <UncontrolledTabs>
        <UncontrolledTab data-testid="tab-1" tabId={1}>
          Tab 1
        </UncontrolledTab>
        <UncontrolledTab data-testid="tab-2" tabId={2}>
          Tab 2
        </UncontrolledTab>
      </UncontrolledTabs>
      <TabContent data-testid="tab-content-1" active={activeTab === 1}>
        Content 1
      </TabContent>
      <TabContent data-testid="tab-content-2" active={activeTab === 2}>
        Content 2
      </TabContent>
    </UncontrolledTabsContextProvider>
  );
};

describe("Tabs", () => {
  it("should pass onChange to the active tab hook", () => {
    const onChangeMock = cy.stub();

    // mount wrapper component
    mountWithTheme(<Wrapper onChange={onChangeMock} />);

    // get tabs context...
    context.tabs.in((tabs) => {
      tabs
        .nthTab(2)
        .click()
        .then(() => {
          // assert that the onChangeMock was called
          expect(onChangeMock).to.have.been.called;

          // assert that the onChangeMock was called with the correct tab id
          expect(onChangeMock).to.have.been.calledWith(2);
        });
    });
  });
});

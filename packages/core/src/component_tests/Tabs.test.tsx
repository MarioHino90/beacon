/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React, { useState } from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { tabs, tabContent } from "@braze/beacon-test-utils";

import { Tabs } from "../components/Tabs";
import { Tab } from "../components/Tab";
import { TabContent } from "../components/TabContent";

const context = makeContext("Tabs", {
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
    <>
      <Tabs data-testid="tabs" onChange={handleChange}>
        <Tab data-testid="tab-1" tabId={1} active={activeTab === 1}>
          Tab 1
        </Tab>
        <Tab data-testid="tab-2" tabId={2} active={activeTab === 2}>
          Tab 2
        </Tab>
      </Tabs>
      <TabContent data-testid="tab-content-1" active={activeTab === 1}>
        Content 1
      </TabContent>
      <TabContent data-testid="tab-content-2" active={activeTab === 2}>
        Content 2
      </TabContent>
    </>
  );
};

describe("Tabs", () => {
  it("should add test ids to rendered components", () => {
    // mount the wrapper
    mountWithTheme(<Wrapper />);

    // check that the tabs have an id
    context.tabs.should("have.attr", "data-testid", "tabs");

    context.tabs.in((tabs) => {
      tabs.nthTab(1).should("have.attr", "data-testid", "tab-1");

      tabs.nthTab(2).should("have.attr", "data-testid", "tab-2");
    });

    //check that the first tab content has an id
    context.tabContent.should("have.attr", "data-testid", "tab-content-1");

    context.tabs.in((tabs) => {
      tabs.nthTab(2).click();
    });

    //check that the second tab content has an id
    context.tabContent.should("have.attr", "data-testid", "tab-content-2");
  });

  it("should render correctly with one tab", () => {
    // mount the wrapper
    mountWithTheme(
      <Tabs onChange={cy.stub()}>
        <Tab tabId={0}>Tab 1</Tab>
      </Tabs>
    );

    // check that it was loaded correctly
    context.tabs.should("be.visible");
  });

  it("should call onChange with tab id of clicked tab", () => {
    // create a stub for onChange
    const onChangeStub = cy.stub();

    // mount the wrapper
    mountWithTheme(<Wrapper onChange={onChangeStub} />);

    // check that tabs loaded and is visible
    context.tabs.should("be.visible");

    // click on the second tab to make sure onChange is called
    context.tabs.in((tabs) => {
      tabs
        .nthTab(2)
        // click on the tab
        .click()
        // make assertions
        .then(() => {
          // ensure that the stub is called
          expect(onChangeStub).to.have.been.called;

          // further assert that the stub is called with the correct id (in this case 2)
          expect(onChangeStub).to.have.been.calledWith(2);
        });
    });
  });

  it("should call onChange with tab id of tab when space is pressed", () => {
    // create a stub for onChange
    const onChangeStub = cy.stub();

    // mount the wrapper
    mountWithTheme(<Wrapper onChange={onChangeStub} />);

    // check that tabs loaded and is visible
    context.tabs.should("be.visible");

    // click on the second tab to make sure onChange is called
    context.tabs.in((tabs) => {
      // focus on the first tab
      tabs.nthTab(1).focus();

      // tab to the next tab
      cy.realPress("Tab");

      // press space to select
      cy.realPress("Space");

      tabs
        .nthTab(2)
        // make assertions
        .then(() => {
          // ensure that the stub is called
          expect(onChangeStub).to.have.been.called;

          // further assert that the stub is called with the correct id (in this case 2)
          expect(onChangeStub).to.have.been.calledWith(2);
        });
    });
  });

  it("should call onChange with tab id of tab when enter is pressed", () => {
    // create a stub for onChange
    const onChangeStub = cy.stub();

    // mount the wrapper
    mountWithTheme(<Wrapper onChange={onChangeStub} />);

    // check that tabs loaded and is visible
    context.tabs.should("be.visible");

    // click on the second tab to make sure onChange is called
    context.tabs.in((tabs) => {
      // focus on the first tab
      tabs.nthTab(1).focus();

      // tab to the next tab
      cy.realPress("Tab");

      // press enter to select
      cy.realPress("Enter");

      tabs
        .nthTab(2)
        // make assertions
        .then(() => {
          // ensure that the stub is called
          expect(onChangeStub).to.have.been.called;

          // further assert that the stub is called with the correct id (in this case 2)
          expect(onChangeStub).to.have.been.calledWith(2);
        });
    });
  });

  it("should NOT call onChange with tab id of tab when any other key is pressed", () => {
    // create a stub for onChange
    const onChangeStub = cy.stub();

    // mount the wrapper
    mountWithTheme(<Wrapper onChange={onChangeStub} />);

    // check that tabs loaded and is visible
    context.tabs.should("be.visible");

    // click on the second tab to make sure onChange is called
    context.tabs.in((tabs) => {
      // focus on the first tab
      tabs.nthTab(1).focus();

      // tab to the next tab
      cy.realPress("Tab");

      // press a character
      cy.realPress("a");

      tabs
        .nthTab(2)
        // make assertions
        .then(() => {
          // ensure that the stub is NOT called
          expect(onChangeStub).not.to.have.been.called;
        });
    });
  });
});

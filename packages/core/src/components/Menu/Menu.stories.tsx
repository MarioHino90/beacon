import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button } from "../Button";
import { Flex } from "../Flex";
import { MenuActionButton } from "../MenuActionButton";
import { MenuCategoryButton } from "../MenuCategoryButton";
import { MenuGroup } from "../MenuGroup";
import { placementTypes } from "../Popper";

import { Menu, useMenu } from "./Menu";
import page from "./Menu.docs.mdx";
import { MenuProps } from "./types";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Overlay/Menu",
  component: Menu,
  parameters: { docs: { page } },
  argTypes: {
    closeOnClickInside: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    placement: {
      options: placementTypes,
      control: { type: "select" },
      defaultValue: "bottom-start",
    },
    variant: {
      options: ["default", "nav"],
      control: { type: "select" },
      defaultValue: "default",
    },
  },
} as ComponentMeta<typeof Menu>;

export const BasicUseWithActionButtons = ({
  closeOnClickInside,
  placement,
  variant,
}: MenuProps) => {
  const [menuState, targetRef] = useMenu<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Flex
        justifyContent="center"
        alignItems="center"
        style={{ height: "90vh" }}
      >
        <Button
          ref={targetRef}
          className="open-close-button"
          id="menu1-button"
          aria-haspopup="true"
          aria-controls="menu1"
          aria-expanded={menuState.isOpen}
        >
          Click to open
        </Button>
      </Flex>
      <Menu
        {...menuState}
        targetRef={targetRef}
        placement={placement}
        variant={variant}
        closeOnClickInside={closeOnClickInside}
        id="menu1"
        aria-labelledby="menu1-button"
      >
        <MenuActionButton id="mi1">User Preview</MenuActionButton>
        <MenuActionButton id="mi2">CSV Export User Data</MenuActionButton>
        <MenuActionButton id="mi3">CSV Export Email Address</MenuActionButton>
        <MenuActionButton id="mi4">
          Export as Facebook Audience
        </MenuActionButton>
        <MenuActionButton disabled id="mi32">
          Export as Google+ Audience
        </MenuActionButton>
      </Menu>
    </React.Fragment>
  );
};

BasicUseWithActionButtons.storyName = "basic use w/ action buttons";

export const BasicUseWithCategoryButtons = ({
  closeOnClickInside,
  placement,
  variant,
}: MenuProps) => {
  const [menuState, targetRef] = useMenu<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Button
        ref={targetRef}
        className="open-close-button"
        id="menu2-button"
        aria-haspopup="true"
        aria-controls="menu2"
        aria-expanded={menuState.isOpen}
      >
        Click to open
      </Button>
      <Menu
        {...menuState}
        targetRef={targetRef}
        placement={placement}
        variant={variant}
        closeOnClickInside={closeOnClickInside}
        id="menu2"
        aria-labelledby="menu2-button"
      >
        <MenuCategoryButton id="mi5" heading="Retention Report">
          Identify if users come back over time
        </MenuCategoryButton>
        <MenuCategoryButton id="mi6" heading="Funnel Report">
          Pinpoint where and why users drop off
        </MenuCategoryButton>
        <MenuCategoryButton id="mi7" heading="Campaign Comparison">
          Measure the impact of different campaigns
        </MenuCategoryButton>
        <MenuCategoryButton id="mi33" heading="Beta Feature" disabled>
          This is disabled
        </MenuCategoryButton>
      </Menu>
    </React.Fragment>
  );
};

BasicUseWithCategoryButtons.storyName = "basic use w/ category buttons";

export const WithActionButtonsIcons = ({
  closeOnClickInside,
  placement,
  variant,
}: MenuProps) => {
  const [menuState, targetRef] = useMenu<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Button
        ref={targetRef}
        className="open-close-button"
        id="menu3-button"
        aria-haspopup="true"
        aria-controls="menu3"
        aria-expanded={menuState.isOpen}
      >
        Click to open
      </Button>
      <Menu
        {...menuState}
        targetRef={targetRef}
        placement={placement}
        variant={variant}
        closeOnClickInside={closeOnClickInside}
        id="menu3"
        aria-labelledby="menu3-button"
      >
        <MenuActionButton id="mi8" iconName="eye">
          User Preview
        </MenuActionButton>
        <MenuActionButton id="mi9" iconName="file-alt">
          CSV Export User Data
        </MenuActionButton>
        <MenuActionButton id="mi10" iconName="file-alt">
          CSV Export Email Address
        </MenuActionButton>
        <MenuActionButton id="mi11" iconName={["fab", "facebook-square"]}>
          Export as Facebook Audience
        </MenuActionButton>
        <MenuActionButton
          id="mi34"
          iconName={["fab", "google-plus-square"]}
          disabled
        >
          Export as Google+ Audience
        </MenuActionButton>
      </Menu>
    </React.Fragment>
  );
};

WithActionButtonsIcons.storyName = "w/ action buttons + icons";

export const WithCategoryButtonsIcons = ({
  closeOnClickInside,
  placement,
  variant,
}: MenuProps) => {
  const [menuState, targetRef] = useMenu<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Button
        ref={targetRef}
        className="open-close-button"
        id="menu4-button"
        aria-haspopup="true"
        aria-controls="menu4"
        aria-expanded={menuState.isOpen}
      >
        Click to open
      </Button>
      <Menu
        {...menuState}
        targetRef={targetRef}
        placement={placement}
        variant={variant}
        closeOnClickInside={closeOnClickInside}
        id="menu4"
        aria-labelledby="menu4-button"
      >
        <MenuCategoryButton
          id="mi12"
          heading="Retention Report"
          iconName="retention-report"
        >
          Identify if users come back over time
        </MenuCategoryButton>
        <MenuCategoryButton
          id="mi13"
          heading="Funnel Report"
          iconName="funnel-report"
        >
          Pinpoint where and why users drop off
        </MenuCategoryButton>
        <MenuCategoryButton
          id="mi14"
          heading="Campaign Comparison"
          iconName="campaign-comparison"
        >
          Measure the impact of different campaigns
        </MenuCategoryButton>
        <MenuCategoryButton
          id="mi34"
          heading="Beta Feature"
          iconName="campaign-comparison"
          disabled
        >
          Measure the impact of different campaigns
        </MenuCategoryButton>
      </Menu>
    </React.Fragment>
  );
};

WithCategoryButtonsIcons.storyName = "w/ category buttons + icons";

export const WithGroupedActionButtonsNoHeader = ({
  closeOnClickInside,
  placement,
  variant,
}: MenuProps) => {
  const [menuState, targetRef] = useMenu<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Button
        ref={targetRef}
        className="open-close-button"
        id="menu5-button"
        aria-haspopup="true"
        aria-controls="menu5"
        aria-expanded={menuState.isOpen}
      >
        Click to open
      </Button>
      <Menu
        {...menuState}
        targetRef={targetRef}
        placement={placement}
        variant={variant}
        closeOnClickInside={closeOnClickInside}
        id="menu5"
        aria-labelledby="menu5-button"
      >
        <MenuGroup>
          <MenuActionButton id="mi15">Print Chart</MenuActionButton>
        </MenuGroup>
        <MenuGroup>
          <MenuActionButton id="mi16">Download PNG Image</MenuActionButton>
          <MenuActionButton id="mi17">Download JPEG Image</MenuActionButton>
          <MenuActionButton id="mi18">Download PDF Document</MenuActionButton>
          <MenuActionButton id="mi19">
            Download SVG Vector Image
          </MenuActionButton>
          <MenuActionButton id="mi20">Download CSV</MenuActionButton>
        </MenuGroup>
      </Menu>
    </React.Fragment>
  );
};

WithGroupedActionButtonsNoHeader.storyName =
  "w/ grouped action buttons + no header";

export const WithGroupedActionButtonsHeader = ({
  closeOnClickInside,
  placement,
  variant,
}: MenuProps) => {
  const [menuState, targetRef] = useMenu<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Button
        ref={targetRef}
        className="open-close-button"
        id="menu6-button"
        aria-haspopup="true"
        aria-controls="menu6"
        aria-expanded={menuState.isOpen}
      >
        Click to open
      </Button>
      <Menu
        {...menuState}
        targetRef={targetRef}
        placement={placement}
        variant={variant}
        closeOnClickInside={closeOnClickInside}
        id="menu6"
        aria-labelledby="menu6-button"
      >
        <MenuGroup heading="Message One or More Channels">
          <MenuActionButton id="mi21">Multichannel Campaign</MenuActionButton>
        </MenuGroup>
        <MenuGroup heading="Single Channel With Multivariate Testing">
          <MenuActionButton id="mi22">Email</MenuActionButton>
          <MenuActionButton id="mi23">Push Notification</MenuActionButton>
          <MenuActionButton id="mi24">In-App Messaging</MenuActionButton>
          <MenuActionButton id="mi25">Content Card</MenuActionButton>
        </MenuGroup>
      </Menu>
    </React.Fragment>
  );
};

WithGroupedActionButtonsHeader.storyName = "w/ grouped action buttons + header";

export const WithGroupedCategoryButtonsNoHeader = ({
  closeOnClickInside,
  placement,
  variant,
}: MenuProps) => {
  const [menuState, targetRef] = useMenu<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Button
        ref={targetRef}
        className="open-close-button"
        id="menu7-button"
        aria-haspopup="true"
        aria-controls="menu7"
        aria-expanded={menuState.isOpen}
      >
        Click to open
      </Button>
      <Menu
        {...menuState}
        targetRef={targetRef}
        placement={placement}
        variant={variant}
        closeOnClickInside={closeOnClickInside}
        id="menu7"
        aria-labelledby="menu7-button"
      >
        <MenuGroup>
          <MenuCategoryButton id="mi26" heading="Retention Report">
            Identify if users come back over time
          </MenuCategoryButton>
        </MenuGroup>
        <MenuGroup>
          <MenuCategoryButton id="mi27" heading="Funnel Report">
            Pinpoint where and why users drop off
          </MenuCategoryButton>
          <MenuCategoryButton id="mi28" heading="Campaign Comparison">
            Measure the impact of different campaigns
          </MenuCategoryButton>
        </MenuGroup>
      </Menu>
    </React.Fragment>
  );
};

WithGroupedCategoryButtonsNoHeader.storyName =
  "w/ grouped category buttons + no header";

export const WithGroupedCategoryButtonsHeader = ({
  closeOnClickInside,
  placement,
  variant,
}: MenuProps) => {
  const [menuState, targetRef] = useMenu<HTMLButtonElement>();

  return (
    <React.Fragment>
      <Button
        ref={targetRef}
        className="open-close-button"
        id="menu8-button"
        aria-haspopup="true"
        aria-controls="menu8"
        aria-expanded={menuState.isOpen}
      >
        Click to open
      </Button>
      <Menu
        {...menuState}
        targetRef={targetRef}
        placement={placement}
        variant={variant}
        closeOnClickInside={closeOnClickInside}
        id="menu8"
        aria-labelledby="menu8-button"
      >
        <MenuGroup heading="Report">
          <MenuCategoryButton id="mi29" heading="Retention Report">
            Identify if users come back over time
          </MenuCategoryButton>
        </MenuGroup>
        <MenuGroup heading="Comparison">
          <MenuCategoryButton id="mi30" heading="Funnel Report">
            Pinpoint where and why users drop off
          </MenuCategoryButton>
          <MenuCategoryButton id="mi31" heading="Campaign Comparison">
            Measure the impact of different campaigns
          </MenuCategoryButton>
        </MenuGroup>
      </Menu>
    </React.Fragment>
  );
};

WithGroupedCategoryButtonsHeader.storyName =
  "w/ grouped category buttons + header";

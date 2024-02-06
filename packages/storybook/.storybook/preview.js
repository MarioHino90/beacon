import React from "react";
import BeaconThemeProvider from "@braze/beacon-styling";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { storybookParameters } from "@braze/beacon-i18n-dev";
import { WithI18n } from "@braze/i18n-storybook";
import "@braze/beacon-fonts/Sailec.css";
import "../../core/src/styles.css";

const Container = ({ context, children }) => {
  return (
    <BeaconThemeProvider>
      <DocsContainer context={context}>{children}</DocsContainer>
    </BeaconThemeProvider>
  );
};

export const parameters = {
  docs: {
    container: Container,
    page: DocsPage,
  },
  options: {
    storySort: {
      order: [
        "Welcome",
        [
          "Getting Started",
          "Contributing",
          ["Overview", "Code", "Component Styling", "Design", "Documentation"],
          "Status and Roadmap",
          "Releases",
          "Support",
          "FAQs",
          "Content Strategy",
          "Accessibility",
          ["Overview", "a11y Best Practices", "Checklists & Tools"],
        ],
        "Core",
        "Commons",
        "Core Developers",
      ],
      method: "alphabetical",
    },
  },
};

export const globals = {
  ...storybookParameters
};

export const decorators = [
  WithI18n,
  (S) => (
    <BeaconThemeProvider>
      <S />
    </BeaconThemeProvider>
  ),
];

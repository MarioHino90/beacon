import {
  extractDeclaration,
  extractSelector,
  getActionContext,
} from "@braze/cypress-utils";

import { bodyText } from "./BodyText.cy";
import { icon } from "./Icon.cy";

const statusChildren = extractDeclaration({
  icon,
  bodyText,
});

export const statusText = extractSelector({
  self: () => cy.get(".bcl-status-text"),
  children: statusChildren,
  actions: {
    assertStatus(self, context, status: "success" | "danger") {
      self.within(() => {
        getActionContext(statusChildren, context).icon.in((icon) => {
          icon.fontAwesomeSvg.should(
            "have.attr",
            "data-icon",
            status === "success" ? "check-circle" : "exclamation-triangle"
          );
        });
      });
    },
  },
});

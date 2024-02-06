# `@braze/beacon-test-utils`

The test utils are for cypress.

## Usage

Install the package in your project directory with:

```bash
// with yarn
yarn add @braze/beacon-test-utils

// with npm
npm install @braze/beacon-test-utils
```

You can use the test utils as follows

```javascript
import { portal, panel } from "@braze/beacon-test-utils";
import { makeContext } from "@braze/cypress-test-utils";

const context = makeContext("somePage", {
  myPanel: {
    self: () => cy.get("#my-panel"),
    children: {
      ...panel,
    }
    portal,
  }
});

// and in your test:

context.myPanel.should("be.visible");
context.myPanel.in((panel) => {
  panel.someChildOfPanel.click(); // etc.
});
context.portal.should("be.visible");
```

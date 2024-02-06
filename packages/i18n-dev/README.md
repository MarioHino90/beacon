# `@braze/beacon-i18n-dev`

i18n utilities for beacon development on local machines

## Usage

This package is only for use in local development of beacon components.

It has setup facilities used in storybook, and jest setup, which are defined in `../../jest.setup.js`,
`../../__mocks__/react-i18next.js`, and `../storybook/.storybook/preview.js`.

## Usage in storybook stories

If you need to access translations in storybook stories, use the `useStorybookI18nNamespace`
function exported from this package.

```ts
import { useStorybookI18nNamespace } from "@braze/beacon-i18n-dev";

// and in your story

const { t } = useStorybookI18nNamespace("beacon-some-namespace");
```

## Usage in cypress tests

To access translations for assertions in cypress tests, use the `cypressTranslate`
and `withAllLocales` functions exported from this package.

```ts
import { cypressTranslate, withAllLocales } from "@braze/beacon-i18n-dev";

withAllLocales((syncLocale, locale) => {
  it(`should do something in locale ${locale}`, () => {
    syncLocale();

    cy.findByText(cypressTranslate("beacon-examples.hello-world", { place: "hi", num: 5.234 }))
      .should("be.visible");
  })
})
```

## Usage in jest tests

If you need to access translations in storybook stories, use the `withAllLocales`
function exported from this package.

```ts
import { cypressTranslate, withAllLocales } from "@braze/beacon-i18n-dev";

withAllLocales((syncLocale, locale) => {
  it(`should do something in locale ${locale}`, () => {
    syncLocale();

    expect(true).toBe(true);
  })
})
```

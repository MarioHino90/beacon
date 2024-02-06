# `@braze/beacon-translations`

Translation files and typescript types for beacon

## Usage

Install the package in your project directory with:

```
yarn add @braze/beacon-translations
```

Then, add the `node_modules/@braze/beacon-translations/dist` directory to your `.i18nConfig.json` `translationsPaths`
configuration array, and run `yarn beacon-cli merge` to gain access to the translations for beacon components.

## Developing beacon components

This package also contains a beacon typed version of `useI18nNamespace`, `useLabsI18nNamespace`,
that can be used by beacon components. The hook is a re-export of `useI18nNamespace` with
typing linked to beacon translations.

## Building translations

The translations are built by the `@braze/beacon-i18n-dev` package (`packages/i18n-dev`) in local development.
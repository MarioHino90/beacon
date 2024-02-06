import { BeaconTranslations } from "@braze/beacon-translations";
declare const i18n: import("i18next").i18n;
declare const cypressTranslate: import("@braze/i18n-cypress").CypressTranslate<BeaconTranslations>, storybookParameters: import("@braze/i18n-storybook").StorybookI18nParameters, withAllLocales: (cb: (syncLocale: () => void, locale: string) => void) => void, locales: string[];
export { i18n, cypressTranslate, storybookParameters, withAllLocales, locales };

import path from "path";

import { loadConfig, I18nConfig } from "@braze/i18n-scripts";
import { setupI18n } from "@braze/i18n-core";
import { setupDevI18n } from "@braze/i18n-dev";
import { translations, BeaconTranslations } from "@braze/beacon-translations";

function getConfig() {
  const configArgument =
    process.env.NODE_ENV === "test"
      ? path.resolve(__dirname, "..", "..", "..", ".i18nConfig.json")
      : // eslint-disable-next-line @typescript-eslint/no-var-requires
        (require("./.i18nConfig.json") as I18nConfig);

  return loadConfig(configArgument);
}

const config = getConfig();

const i18n = setupI18n<typeof translations>(translations, config);

const { cypressTranslate, storybookParameters, withAllLocales, locales } =
  setupDevI18n<BeaconTranslations, typeof translations>(
    i18n,
    translations,
    config
  );

export { i18n, cypressTranslate, storybookParameters, withAllLocales, locales };

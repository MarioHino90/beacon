// index.ts for node (jest) environment
import path from "path";

export { useCoreI18nNamespace as useI18nNamespace } from "./useCoreI18nNamespace";

export type { BeaconTranslations } from "./types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const translations = require(path.resolve(
  __dirname,
  "translations.braze.json"
));

export type Translations = typeof translations;

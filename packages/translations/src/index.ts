// index.ts for webpack environment
import translations from "./translations.braze.json";

export { useCoreI18nNamespace as useI18nNamespace } from "./useCoreI18nNamespace";

export type { I18nT } from "./useCoreI18nNamespace";

export type { BeaconTranslations } from "./types";

export type Translations = typeof translations;

export { translations };

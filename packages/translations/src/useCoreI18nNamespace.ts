import {
  useI18nNamespace,
  UseI18nNamespace,
  NamespaceKeys,
  UseI18nNamespaceTranslate,
} from "@braze/i18n-core";

import type { BeaconTranslations } from "./types";

export const useCoreI18nNamespace: UseI18nNamespace<BeaconTranslations> =
  useI18nNamespace;

/**
 * Type to use when passing t into a function
 */
export type I18nT<Namespace extends NamespaceKeys<BeaconTranslations>> =
  UseI18nNamespaceTranslate<BeaconTranslations, Namespace>;

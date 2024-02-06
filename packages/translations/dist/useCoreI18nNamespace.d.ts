import { UseI18nNamespace, NamespaceKeys, UseI18nNamespaceTranslate } from "@braze/i18n-core";
import type { BeaconTranslations } from "./types";
export declare const useCoreI18nNamespace: UseI18nNamespace<BeaconTranslations>;
/**
 * Type to use when passing t into a function
 */
export declare type I18nT<Namespace extends NamespaceKeys<BeaconTranslations>> = UseI18nNamespaceTranslate<BeaconTranslations, Namespace>;

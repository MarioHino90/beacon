import { ModalProps } from "@braze/beacon-core";

import { AlertModalIntentContextType } from "../AlertModalIntentContext";

export type UseAlertModalResult = [boolean, () => void];

export interface AlertModalProps extends ModalProps {
  /** intent of the alert modal representing the type of information that should be conveyed */
  intent: AlertModalIntentContextType;
}

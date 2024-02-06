import { useState } from "react";

import { UseAlertModalResult } from "../types";

export const useAlertModal = (defaultValue = false): UseAlertModalResult => {
  const [isOpen, setState] = useState(defaultValue);
  const toggle = () => setState(!isOpen);

  return [isOpen, toggle];
};

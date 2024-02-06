import { createContext } from "react";

import { AlertModalIntentContextType } from "./types";

export const AlertModalIntentContext =
  createContext<AlertModalIntentContextType>("info");

import { ReactNode, ReactNodeArray } from "react";

export interface UncontrolledTabsContextType {
  /** currently active tab */
  activeTab: string | number;
  /** callback to update active tab state */
  onTabChange: (tabId: string | number) => void;
}

export interface UncontrolledTabsContextProviderProps {
  /** children of the provider */
  children: ReactNode | ReactNodeArray;
  /** the default active tab */
  defaultTab: string | number;
  /** callback on active tab change */
  onChange?: (tabId: string | number) => void;
}

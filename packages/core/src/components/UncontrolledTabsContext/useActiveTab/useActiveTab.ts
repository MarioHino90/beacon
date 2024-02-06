/**
 * @fileoverview hook to handle active tab state
 */
import { useState } from "react";

/**
 * hook to handle active tab state
 *
 * @param defaultTab - the id of the "first" tab that is active
 * @param onChange [optional] - callback on active tab change
 */
export const useActiveTab = (
  defaultTab: string | number = "",
  onChange?: (tabId: string | number) => void
): {
  activeTab: number | string;
  onTabChange: (tabId: number | string) => void;
} => {
  const [activeTab, setActiveTab] = useState<number | string>(defaultTab);

  const onTabChange = (tabId: number | string) => {
    setActiveTab(tabId);

    if (onChange) {
      onChange(tabId);
    }
  };

  return { activeTab, onTabChange };
};

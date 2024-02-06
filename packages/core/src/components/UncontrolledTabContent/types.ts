import { TabContentProps } from "../TabContent";
import { TabProps } from "../Tab";

export interface UncontrolledTabContentProps
  extends Omit<TabContentProps, "active"> {
  /** the id of the current tab */
  tabId: TabProps["tabId"];
}

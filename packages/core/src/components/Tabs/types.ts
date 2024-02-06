import { ReactNode } from "react";

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** function to be invoked when a user selects a tab */
  onChange: (tabId: number | string) => void;
  /** children to be passed into component; must be instances of the 'Tab' component */
  children?: ReactNode | ReactNode[];
}

export interface TabNavigatorProps
  extends React.HTMLAttributes<HTMLUListElement> {}

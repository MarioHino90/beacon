/**
 * @fileoverview a component that renders a list of navigational tabs
 */
import React from "react";
import classNames from "classnames";

import { TabsContextProvider } from "../TabsContext";

import { TabsProps } from "./types";
import { TabNavigator } from "./TabNavigator";

export const Tabs = ({
  className,
  children,
  onChange,
  ...props
}: TabsProps): React.ReactElement => (
  <div {...props} className={classNames(["bcl-tabs", className])}>
    <nav>
      <TabsContextProvider onChange={onChange}>
        <TabNavigator>{children}</TabNavigator>
      </TabsContextProvider>
    </nav>
  </div>
);

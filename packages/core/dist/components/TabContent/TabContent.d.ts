/**
 * @fileoverview component that handles showing/hiding tab content - as well as
container styling for tab content
 */
import { ReactElement } from "react";
import { TabContentProps } from "./types";
export declare const TabContent: ({ active, ...props }: TabContentProps) => ReactElement | null;

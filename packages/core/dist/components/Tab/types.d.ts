/// <reference types="react" />
export interface StyledTabProps extends React.HTMLAttributes<HTMLLIElement> {
    /** indicates that the tab is currently active */
    active?: boolean;
    /** indicates that the tab is currently disabled */
    disabled?: boolean;
}
export interface TabProps extends StyledTabProps {
    /** unique id for the tab - most often the index */
    tabId: string | number;
}

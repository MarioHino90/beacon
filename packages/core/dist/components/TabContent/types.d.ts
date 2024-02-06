/// <reference types="react" />
export interface StyledTabContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface TabContentProps extends StyledTabContentProps {
    /** indicates if the tab is currently active */
    active: boolean;
}

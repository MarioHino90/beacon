/// <reference types="react" />
export interface CollapsibleListItemProps extends StyledCollapsibleListItemProps {
}
export interface StyledCollapsibleListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /** child elements to be rendered inside the component tree */
    children?: React.ReactNode | React.ReactNode[];
}

export interface CollapsibleListProps extends StyledCollapsibleListProps {
  heading?: string;
}

export interface StyledCollapsibleListProps
  extends React.HTMLAttributes<HTMLElement> {
  /** child elements to be rendered inside the component tree */
  children?: React.ReactNode | React.ReactNode[];
}

export type Status = "danger" | "success";

export interface StatusTextProps extends StyledStatusTextProps {
  /** indicates that the status icon should be displayed */
  displayIcon?: boolean;
  /** indicates the current status of the form */
  status?: Status;
}

export interface StyledStatusTextProps
  extends React.HTMLAttributes<HTMLDivElement> {}

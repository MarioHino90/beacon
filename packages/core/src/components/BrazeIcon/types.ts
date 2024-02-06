import React from "react";

export type GenericSpotIcon<Props> = React.LazyExoticComponent<{
  (props: Props): React.ReactElement;
  displayName: string;
}>;

export interface SpotIcons {
  "add-document": GenericSpotIcon<AddDocumentProps>;
  "add-image-or-document": GenericSpotIcon<AddImageOrDocumentProps>;
  "arrow-toggle": GenericSpotIcon<ArrowToggleProps>;
  "campaign-comparison": GenericSpotIcon<CampaignComparisonProps>;
  content: GenericSpotIcon<ContentProps>;
  "email-settings": GenericSpotIcon<EmailSettingsProps>;
  "empty-table": GenericSpotIcon<AddDocumentProps>;
  "funnel-report": GenericSpotIcon<FunnelReportProps>;
  mms: GenericSpotIcon<MMSProps>;
  preview: GenericSpotIcon<PreviewProps>;
  "retention-report": GenericSpotIcon<RetentionReportProps>;
  sms: GenericSpotIcon<SMSProps>;
}

export interface BrazeIconProps extends StyledBrazeIconProps {
  /**
   * icon to be displayed to user */
  name?: keyof SpotIcons;
}

export interface StyledBrazeIconProps
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * child elements to be rendered inside the component tree */
  children?: React.ReactNode | React.ReactNode[];
}

export interface AddDocumentProps
  extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface AddImageOrDocumentProps
  extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface ArrowToggleProps
  extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface CampaignComparisonProps
  extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface ContentProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface FunnelReportProps
  extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface EmailSettingsProps
  extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface PreviewProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface MMSProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface RetentionReportProps
  extends React.SVGAttributes<HTMLOrSVGElement> {}

export interface SMSProps extends React.SVGAttributes<HTMLOrSVGElement> {}

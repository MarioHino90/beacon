import React, { lazy, Suspense } from "react";
import classNames from "classnames";

import { BrazeIconProps, SpotIcons } from "./types";
import { StyledBrazeIcon } from "./StyledBrazeIcon";

// lazy import icons here
const AddDocument = lazy(() =>
  import("./AddDocument").then((module) => ({ default: module.AddDocument }))
);

const AddImageOrDocument = lazy(() =>
  import("./AddImageOrDocument").then((module) => ({
    default: module.AddImageOrDocument,
  }))
);

const ArrowToggle = lazy(() =>
  import("./ArrowToggle").then((module) => ({ default: module.ArrowToggle }))
);

const CampaignComparison = lazy(() =>
  import("./CampaignComparison").then((module) => ({
    default: module.CampaignComparison,
  }))
);

const Content = lazy(() =>
  import("./Content").then((module) => ({ default: module.Content }))
);

const EmailSettings = lazy(() =>
  import("./EmailSettings").then((module) => ({
    default: module.EmailSettings,
  }))
);

const FunnelReport = lazy(() =>
  import("./FunnelReport").then((module) => ({ default: module.FunnelReport }))
);

const MMS = lazy(() =>
  import("./MMS").then((module) => ({ default: module.MMS }))
);

const Preview = lazy(() =>
  import("./Preview").then((module) => ({ default: module.Preview }))
);

const RetentionReport = lazy(() =>
  import("./RetentionReport").then((module) => ({
    default: module.RetentionReport,
  }))
);

const SMS = lazy(() =>
  import("./SMS").then((module) => ({ default: module.SMS }))
);

// create a way to get to the icons here
export const spotIcons: SpotIcons = {
  "add-document": AddDocument,
  "add-image-or-document": AddImageOrDocument,
  "arrow-toggle": ArrowToggle,
  "campaign-comparison": CampaignComparison,
  content: Content,
  "email-settings": EmailSettings,
  "empty-table": AddDocument,
  "funnel-report": FunnelReport,
  mms: MMS,
  preview: Preview,
  "retention-report": RetentionReport,
  sms: SMS,
};

export const BrazeIcon = ({
  className,
  name,
  ...props
}: BrazeIconProps): React.ReactElement | null => {
  // bail if no `name` prop is provided
  if (!name) {
    return null;
  }

  // grab icon's component for rendering
  const Icon = spotIcons[name];

  // bail if provided 'name' prop does not
  // corespond to any keys in the 'icons' obj
  if (!Icon) {
    return null;
  }

  return (
    <StyledBrazeIcon
      {...props}
      className={classNames(["bcl-braze-icon", className])}
    >
      <Suspense fallback="">
        <Icon />
      </Suspense>
    </StyledBrazeIcon>
  );
};

BrazeIcon.displayName = "BrazeIcon";

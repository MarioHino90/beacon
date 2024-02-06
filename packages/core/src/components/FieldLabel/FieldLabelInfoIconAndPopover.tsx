import React, { useRef } from "react";
import { useI18nNamespace } from "@braze/beacon-translations";

import { Popover, usePopover } from "../Popover";
import { AllowedTriggers, AllowedUnTriggers } from "../Popper";

import { FieldLabelInfoIconAndPopoverProps as FieldLabelInfoIconAndPopoverProps } from "./types";
import { FieldLabelInfoIconButton } from "./FieldLabelInfoIconButton";
import { useFieldLabelPopoverKeyboardAccessibilityEvents } from "./hooks/useFieldLabelPopoverKeyboardAccessibilityEvents";

const hoverTriggers: AllowedTriggers[] = ["mouseenter", "focus"];
const hoverUntriggers: AllowedUnTriggers[] = ["mouseleave", "blur"];
const clickTriggers: AllowedTriggers[] = ["click", "focus"];
const clickUntriggers: AllowedUnTriggers[] = ["click", "blur"];

export const FieldLabelInfoIconAndPopover = ({
  helpIconPopoverContent,
  infoIconTriggerVariant: helpIconTriggerVariant,
  infoIconVariant: helpIconVariant,
  controlRef,
}: FieldLabelInfoIconAndPopoverProps): React.ReactElement | null => {
  const { t } = useI18nNamespace("beacon-field-label");
  const popperRef = useRef<HTMLDivElement>(null);
  const [popoverState, targetRef] = usePopover<HTMLButtonElement>();
  const { isOpen } = popoverState;

  // handle tabbing in and out of the popover so the natural tab flow works as desired
  // this is only relevant to popover-based help icon with interactive content inside the popover.
  useFieldLabelPopoverKeyboardAccessibilityEvents(
    isOpen,
    controlRef,
    popperRef,
    targetRef
  );

  if (!helpIconPopoverContent) {
    return null;
  }

  return (
    <>
      <FieldLabelInfoIconButton
        variant={helpIconVariant}
        ref={targetRef}
        aria-haspopup="dialog"
        aria-expanded={popoverState.isOpen}
        aria-label={
          popoverState.isOpen
            ? t(
                "tab-to-enter-popover-close",
                "Help text available. Tab to view help text, click to close popover"
              )
            : t(
                "tab-to-enter-popover-open",
                "Help text available. Tab to view help text, click to open popover"
              )
        }
      />
      <Popover
        {...popoverState}
        isCloseEnabled={helpIconTriggerVariant === "click"}
        targetRef={targetRef}
        ref={popperRef}
        interactive={typeof helpIconPopoverContent !== "string"}
        defaultPlacement="top"
        placement="auto"
        triggers={
          helpIconTriggerVariant === "hover" ? hoverTriggers : clickTriggers
        }
        untriggers={
          helpIconTriggerVariant === "hover" ? hoverUntriggers : clickUntriggers
        }
      >
        {helpIconPopoverContent}
      </Popover>
    </>
  );
};

import React, { forwardRef, useRef } from "react";

import { PopperRenderer } from "../PopperRenderer";
import { usePopperEvents } from "../usePopperEvents";
import { usePopperContext } from "../PopperContext";
import { PopperManagerProps } from "../types";

export const PopperManager = forwardRef(
  (
    props: PopperManagerProps,
    ref: React.RefObject<HTMLDivElement>
  ): React.ReactElement | null => {
    // create a ref for the popper
    const newRef = useRef<HTMLDivElement>(null);
    const popperRef = ref || newRef;

    /**
     * open/close event listeners per triggers
     */
    usePopperEvents(popperRef);

    // get desired props from context
    const { isOpen } = usePopperContext();

    return isOpen ? <PopperRenderer {...props} ref={popperRef} /> : null;
  }
);

PopperManager.displayName = "PopperManager";

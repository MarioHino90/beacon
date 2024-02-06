import { useCallback, useReducer } from "react";

import { usePopperContext } from "../PopperContext";
import { PlacementType, PopperPlacement } from "../types";
import { getElement, makePopperPlacement } from "../utils";

export interface PopperPlacementState {
  left: number;
  top: number;
  activePlacement: PlacementType;
}

interface UpdatePlacementAction extends PopperPlacementState {}

type Actions = UpdatePlacementAction;

export interface UsePopperPlacementResult extends PopperPlacement {
  /** function to update popper placement */
  handlePlacementUpdate: () => void;
}

const initialState: PopperPlacementState = {
  left: 0,
  top: 0,
  activePlacement: "bottom",
};

const reducer = (
  state: PopperPlacementState,
  action: Actions
): PopperPlacementState => {
  if (
    action.left !== state.left ||
    action.top !== state.top ||
    action.activePlacement !== state.activePlacement
  ) {
    return {
      ...state,
      top: action.top,
      left: action.left,
      activePlacement: action.activePlacement,
    };
  } else {
    return state;
  }
};

export const usePopperPlacement = (
  popperRef: React.RefObject<HTMLDivElement>
): UsePopperPlacementResult => {
  // state for coordinate placement
  const [{ activePlacement, left, top }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // get popper context
  const {
    defaultPlacement,
    distance,
    interactive,
    placement,
    portalRef,
    skidding,
    target,
    targetRef,
  } = usePopperContext();

  /**
   * Function that gets popper coordinates and updates state
   */
  const handlePlacementUpdate = useCallback(() => {
    // get element from targetRef or target
    const element = getElement({ targetRef, target });

    // calculate what the placement of the popper should be relative to target
    const { activePlacement, left, top } = makePopperPlacement(
      element,
      popperRef,
      {
        defaultPlacement,
        distance,
        interactive,
        placement,
        portalRef,
        skidding,
      }
    );

    // only update placement state if the coordinates have changed
    dispatch({ left, top, activePlacement });
  }, [
    defaultPlacement,
    distance,
    interactive,
    placement,
    popperRef,
    portalRef,
    skidding,
    target,
    targetRef,
  ]);

  return { left, top, handlePlacementUpdate, activePlacement };
};

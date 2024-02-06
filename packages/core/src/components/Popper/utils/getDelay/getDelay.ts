import { DelayArray, DelayType } from "../../types";

export /**
 * Function that returns an array of delay values if delay
 * is defined, null otherwise
 * @param delay an array of two numbers or a single number
 */
const getDelay = (delay: DelayType | undefined): DelayArray | null => {
  if (Array.isArray(delay)) {
    return delay;
  }

  if (typeof delay === "number") {
    return [delay, delay];
  }

  return null;
};

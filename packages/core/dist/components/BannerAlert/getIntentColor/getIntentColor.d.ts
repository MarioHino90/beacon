import { ColorIntensityTypeNumeric } from "@braze/beacon-theme";
import { IntentColorArgs } from "../types";
/**
 * function creator to get the color to display for a specific intent
 *
 * @param shade - the shade of color
 *
 * @return a function to get the intent color, given a intent and theme
 */
export declare const createGetIntentColor: (shade: ColorIntensityTypeNumeric) => (props: IntentColorArgs) => string;

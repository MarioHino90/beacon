import { BrazeIconDefinition, BrazeIconProps } from "../types";

export const create = ({
  name,
  width,
  height,
  unicode,
  path,
}: BrazeIconProps): BrazeIconDefinition => ({
  prefix: "fas",
  iconName: name,
  icon: [width, height, [], unicode, path],
});

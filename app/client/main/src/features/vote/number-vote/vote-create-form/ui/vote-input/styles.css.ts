import { typo, vars } from "@packages/ui";
import { style } from "@vanilla-extract/css";

export const inputPrefix = style([
  typo.subTitle[2],
  { color: vars.color.primary[1], marginRight: vars.space[8] },
]);

import { typo, vars } from "@packages/ui";
import { style } from "@vanilla-extract/css";

export const categoryListLayout = style({
  maxWidth: 1920,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: vars.space[16],

  padding: vars.space[24],
});

export const categoryListDescStrong = style([
  typo.subTitle[2],
  {
    color: vars.color.primary[1],
  },
]);

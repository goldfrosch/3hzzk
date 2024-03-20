import { style } from "@vanilla-extract/css";
import { typo, vars } from "@packages/ui";

export const dashboardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: vars.space[16],
});

export const dashboardTitle = style([
  typo.header[0],
  { color: vars.color.gray[2] },
]);

export const hairline = style({
  width: "100%",
  height: 2,
  borderRadius: 2,

  background: vars.color.gray[5],
});

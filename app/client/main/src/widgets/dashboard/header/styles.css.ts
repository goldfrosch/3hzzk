import { style } from "@vanilla-extract/css";
import { vars } from "@packages/ui";

export const dashboardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  padding: vars.space[16],
});

export const hairline = style({
  width: "100%",
  height: 2,
  borderRadius: 2,

  background: vars.color.gray[5],
});

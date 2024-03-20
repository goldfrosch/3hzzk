import { vars } from "@packages/ui";
import { style } from "@vanilla-extract/css";

export const dashboardLayout = style({
  display: "flex",
});

export const dashboardMain = style({
  flex: 1,

  padding: vars.space[12],
});

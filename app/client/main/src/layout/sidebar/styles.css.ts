import { vars } from "@packages/ui";
import { style } from "@vanilla-extract/css";

export const sidebarLayout = style({
  width: "7vw",
  minWidth: 60,
  height: "100vh",
  backgroundColor: vars.color.gray[5],

  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  padding: `${vars.space[24]} 0`,
  boxSizing: "border-box",
});

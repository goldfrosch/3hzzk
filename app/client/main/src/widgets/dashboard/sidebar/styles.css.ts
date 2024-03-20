import { typo, vars } from "@packages/ui";
import { style } from "@vanilla-extract/css";

export const dashboardSide = style({
  width: "10vw",
  minWidth: 120,
  height: "100vh",
  backgroundColor: vars.color.gray[5],

  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  padding: vars.space[24],
});

export const dashboardSideLogo = style({
  borderRadius: "100%",
});

export const dashboardSideLogoLayout = style({
  display: "flex",
  gap: vars.space[4],
  alignItems: "center",

  paddingBottom: vars.space[48],
});

export const dashboardSideLogoTitle = style([
  typo.subTitle[0],
  { color: vars.color.primary[1] },
]);

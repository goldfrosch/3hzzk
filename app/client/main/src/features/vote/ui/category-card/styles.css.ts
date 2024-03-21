import { typo, vars } from "@packages/ui";
import { style } from "@vanilla-extract/css";

export const categoryLayout = style({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  gap: vars.space[8],

  paddingBottom: 360,

  cursor: "pointer",
});

export const categoryThumbnail = style({
  borderRadius: vars.borderRadius[16],
  marginBottom: vars.space[4],
});

export const categoryTitle = style([
  typo.subTitle[0],
  {
    marginBottom: vars.space[16],
  },
]);

export const categoryDesc = style([
  typo.body[0],
  { color: vars.color.gray[2] },
]);

import { vars, typo } from "@packages/ui";
import { style } from "@vanilla-extract/css";

export const voteHeaderLayout = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space[24],

  backgroundColor: vars.color.gray[5],
});

export const voteTitleLayout = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[4],
});

export const voteTitle = style([
  typo.header[1],
  {
    color: vars.color.gray[2],
  },
]);

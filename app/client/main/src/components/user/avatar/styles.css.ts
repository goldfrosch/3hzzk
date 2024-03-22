import { vars, typo } from "@packages/ui";
import { style } from "@vanilla-extract/css";

export const avatarLayout = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[8],
});

export const avatarThumbnail = style({
  border: `2px solid ${vars.color.primary[1]}`,
  borderRadius: "100%",
});

export const avatarName = style([typo.body[1]]);

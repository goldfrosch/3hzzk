import { style } from "@vanilla-extract/css";
import { vars } from "../../styles";

export const cardLayout = style({
  borderRadius: 24,
  padding: vars.space[24],
  backgroundColor: vars.color.gray[5],
});

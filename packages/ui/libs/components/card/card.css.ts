import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles";

export const cardLayout = recipe({
  base: {
    borderRadius: 24,
    padding: vars.space[24],
  },
  variants: {
    theme: {
      mild: { backgroundColor: vars.color.gray[5] },
      border: { background: "none", border: `1px solid ${vars.color.gray[5]}` },
    },
  },
  defaultVariants: {
    theme: "mild",
  },
});

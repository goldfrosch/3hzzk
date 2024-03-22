import { recipe } from "@vanilla-extract/recipes";
import { typo, vars } from "../../../styles";
import { style } from "@vanilla-extract/css";

export const inputStyle = style({
  backgroundColor: vars.color.gray[5],
  color: vars.color.gray[2],
  width: "100%",
  height: "70%",
  outline: "none",
  fontSize: "inherit",
  fontWeight: "inherit",
  "::placeholder": {
    color: vars.color.gray[3],
  },
});

export const inputLayoutStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",

    backgroundColor: vars.color.gray[5],
    color: vars.color.gray[2],
    border: `1px solid ${vars.color.gray[5]}`,
    ":focus-within": {
      border: `1px solid ${vars.color.primary[2]}`,
    },
  },
  variants: {
    size: {
      l: [
        {
          height: 48,
          padding: "0 10px",
          borderRadius: 24,
        },
        typo.subTitle[2],
      ],
      m: [
        {
          height: 36,
          padding: "0 10px",

          borderRadius: 18,
        },
        typo.body[0],
      ],
      s: [
        {
          height: 30,
          padding: "0 10px",

          borderRadius: 15,
        },
        typo.body[1],
      ],
    },
  },
  defaultVariants: {
    size: "m",
  },
});

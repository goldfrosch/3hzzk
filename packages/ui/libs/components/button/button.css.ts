import { recipe } from "@vanilla-extract/recipes";
import { typo, vars } from "../../styles";
import { style } from "@vanilla-extract/css";

export const fullWidth = style({
  width: "100%",
});

export const buttonStyle = recipe({
  base: {
    borderRadius: vars.borderRadius[8],
    cursor: "pointer",
  },
  variants: {
    size: {
      xl: [
        {
          minWidth: 117,
          height: 48,
          padding: "0 10px",
        },
        typo.subTitle[0],
      ],
      l: [
        {
          minWidth: 96,
          height: 44,
          padding: "0 10px",
        },
        typo.subTitle[0],
      ],
      m: [
        {
          minWidth: 80,
          height: 36,
          padding: "0 10px",
        },
        typo.subTitle[2],
      ],
      s: [
        {
          minWidth: 66,
          height: 30,
          padding: "0 10px",
        },
        typo.body[1],
      ],
      xs: [
        {
          minWidth: 52,
          height: 28,
          padding: "0 8px",
        },
        typo.body[2],
      ],
    },
    theme: { primary: {}, normal: {} },
    type: {
      filled: {
        border: 0,
        ":hover": { filter: "brightness(1.1)" },
      },
      outline: {
        background: "none",
        ":hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
      },
      link: {
        border: "none",
        background: "none",
        ":hover": { filter: "brightness(1.1)" },
      },
    },
  },
  compoundVariants: [
    {
      variants: { theme: "normal", type: "filled" },
      style: {
        backgroundColor: vars.color.gray[4],
        color: vars.color.gray[0],
      },
    },
    {
      variants: { theme: "primary", type: "filled" },
      style: {
        backgroundColor: vars.color.gray[4],
        color: vars.color.primary[1],
      },
    },
    {
      variants: { theme: "normal", type: "outline" },
      style: {
        border: `1px solid ${vars.color.gray[4]}`,
        color: vars.color.gray[0],
      },
    },
    {
      variants: { theme: "primary", type: "outline" },
      style: {
        border: `1px solid ${vars.color.primary[0]}`,
        color: vars.color.primary[0],
      },
    },
    {
      variants: { theme: "normal", type: "link" },
      style: {
        color: vars.color.gray[0],
      },
    },
    {
      variants: { theme: "primary", type: "link" },
      style: {
        color: vars.color.primary[0],
      },
    },
  ],
  defaultVariants: {
    size: "m",
    type: "filled",
    theme: "primary",
  },
});

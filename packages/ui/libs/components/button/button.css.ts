import { recipe } from "@vanilla-extract/recipes";
import { typo, vars } from "../../styles";

export const buttonStyle = recipe({
  base: { borderRadius: vars.borderRadius[8] },
  variants: {
    size: {
      xl: [
        {
          height: 48,
          padding: "0 10px",
        },
        typo.subTitle[0],
      ],
      l: [
        {
          height: 44,
          padding: "0 10px",
        },
        typo.subTitle[0],
      ],
      m: [
        {
          height: 36,
          padding: "0 10px",
        },
        typo.subTitle[2],
      ],
      s: [
        {
          height: 30,
          padding: "0 10px",
        },
        typo.body[1],
      ],
      xs: [
        {
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
      },
      outline: {
        background: "none",
      },
      link: {
        border: "none",
        backgroundColor: "none",
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
  },
});

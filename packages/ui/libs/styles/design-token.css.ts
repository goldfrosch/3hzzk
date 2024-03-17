import { style } from "@vanilla-extract/css";

export const vars = {
  color: {
    gray: {
      0: "#ffffff",
      1: "#e5e5e5",
      2: "#c2c2c2",
      3: "#7f7f7f",
      4: "#414141",
      5: "#161616",
      6: "#000000",
    },
    primary: {
      0: "#00de7b",
      1: "rgba(0,255,163,.9)",
      2: "#01B877",
    },
  },
  fontSize: {
    24: "24px",
    20: "20px",
    18: "18px",
    16: "16px",
    14: "14px",
    12: "12px",
    10: "10px",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  borderRadius: {
    all: "100%",
    half: "50%",
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
  },
};

export const typo = {
  header: {
    0: style({ fontSize: vars.fontSize[24] }),
    1: style({ fontSize: vars.fontSize[20] }),
    2: style({ fontSize: vars.fontSize[18] }),
  },
  subTitle: {
    0: style({
      fontSize: vars.fontSize[18],
      fontWeight: vars.fontWeight.bold,
    }),
    1: style({
      fontSize: vars.fontSize[18],
      fontWeight: vars.fontWeight.medium,
    }),
    2: style({ fontSize: vars.fontSize[16], fontWeight: vars.fontWeight.bold }),
  },
  body: {
    0: style({
      fontSize: vars.fontSize[16],
      fontWeight: vars.fontWeight.medium,
    }),
    1: style({ fontSize: vars.fontSize[14], fontWeight: vars.fontWeight.bold }),
    2: style({
      fontSize: vars.fontSize[14],
      fontWeight: vars.fontWeight.medium,
    }),
  },
};

import { style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { nanumGothicBold } from "../css/text.css";

export const vars = {
  color: {
    gray: {
      0: "#ffffff",
      1: "#e5e5e5",
      2: "#c2c2c2",
      3: "#7f7f7f",
      4: "#414141",
      5: "#2f2f2f",
      6: "#161616",
      7: "#000000",
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
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
  },
  space: {
    0: "0px",
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    24: "24px",
    48: "48px",
    64: "64px",
  },
};

export const typo = {
  header: {
    0: style({
      fontSize: vars.fontSize[24],
      lineHeight: "130%",
      fontWeight: vars.fontWeight.bold,
      fontFamily: nanumGothicBold,
    }),
    1: style({
      fontSize: vars.fontSize[20],
      lineHeight: "130%",
      fontWeight: vars.fontWeight.bold,
      fontFamily: nanumGothicBold,
    }),
    2: style({
      fontSize: vars.fontSize[18],
      lineHeight: "130%",
      fontWeight: vars.fontWeight.bold,
      fontFamily: nanumGothicBold,
    }),
  },
  subTitle: {
    0: style({
      fontSize: vars.fontSize[18],
      fontWeight: vars.fontWeight.bold,
      lineHeight: "130%",
    }),
    1: style({
      fontSize: vars.fontSize[18],
      fontWeight: vars.fontWeight.medium,
      lineHeight: "130%",
    }),
    2: style({
      fontSize: vars.fontSize[16],
      fontWeight: vars.fontWeight.bold,
      lineHeight: "130%",
    }),
  },
  body: {
    0: style({
      fontSize: vars.fontSize[16],
      fontWeight: vars.fontWeight.medium,
      lineHeight: "130%",
    }),
    1: style({
      fontSize: vars.fontSize[14],
      fontWeight: vars.fontWeight.bold,
      lineHeight: "130%",
    }),
    2: style({
      fontSize: vars.fontSize[14],
      fontWeight: vars.fontWeight.medium,
      lineHeight: "130%",
    }),
  },
};

const layoutProperties = defineProperties({
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    gap: vars.space,

    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,

    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
  },
  shorthands: {
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    py: ["paddingBottom", "paddingTop"],
    px: ["paddingLeft", "paddingRight"],

    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    my: ["paddingBottom", "paddingTop"],
    mx: ["paddingLeft", "paddingRight"],
  },
});

export const properties = createSprinkles(layoutProperties);

export type Properties = Parameters<typeof properties>[0];

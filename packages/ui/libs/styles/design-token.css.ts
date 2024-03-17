import { style } from "@vanilla-extract/css";
import { nanumGothicBold } from "../css/text.css";

export const vars = {
  color: {
    gray: {
      0: "#ffffff",
      1: "#2f2f2f",
      2: "#414141",
      3: "#161616",
      4: "#000000",
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
    0: style({ fontSize: vars.fontSize[24], fontFamily: nanumGothicBold }),
    1: style({ fontSize: vars.fontSize[20], fontFamily: nanumGothicBold }),
    2: style({ fontSize: vars.fontSize[18], fontFamily: nanumGothicBold }),
  },
  subTitle: {},
  body: {},
};

import { globalStyle } from "@vanilla-extract/css";
import { nanumGothicMedium } from "./text.css";
import { vars } from "../styles";

globalStyle("body", {
  backgroundColor: vars.color.gray[6],
  color: vars.color.gray[0],
});

globalStyle("button, input, select, textarea", {
  fontSize: 0,
  margin: 0,
  verticalAlign: "baseline",
  background: "none",
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  border: 0,

  fontSize: "100%",
  verticalAlign: "baseline",
  fontFamily: nanumGothicMedium,
});

globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  }
);

globalStyle("nav ul", {
  listStyle: "none",
});

globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote:before, blockquote:after, q:before, q:after", {
  content: "",
});

globalStyle("a", {
  margin: 0,
  padding: 0,
  fontSize: "100%",
  verticalAlign: "baseline",
  background: "transparent",
});

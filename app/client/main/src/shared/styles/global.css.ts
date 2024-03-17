import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

import { vars } from "./design-token.css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  border: 0,

  lineHeight: "150%",
});

createGlobalTheme(":root", vars);

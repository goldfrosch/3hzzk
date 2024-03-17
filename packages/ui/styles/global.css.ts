import { createGlobalTheme } from "@vanilla-extract/css";

import { vars } from "./design-token.css";

createGlobalTheme(":root", vars);

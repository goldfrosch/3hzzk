import { createGlobalTheme } from "@vanilla-extract/css";

import { vars } from "../styles/design-token.css";

createGlobalTheme(":root", vars);

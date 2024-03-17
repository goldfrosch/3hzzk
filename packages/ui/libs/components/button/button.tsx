import { HTMLAttributes, PropsWithChildren, createElement } from "react";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as styles from "./button.css";

type ButtonProps = RecipeVariants<typeof styles.buttonStyle> &
  PropsWithChildren &
  HTMLAttributes<HTMLButtonElement>;

const Button = ({ size, type, theme, children, ...props }: ButtonProps) => {
  return createElement(
    "button",
    {
      className: styles.buttonStyle({ size, type, theme }),
      ...props,
    },
    children
  );
};

export default Button;

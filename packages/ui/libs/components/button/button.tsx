import { createElement } from "react";
import type { HTMLAttributes, PropsWithChildren } from "react";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import classNames from "classnames";

import * as styles from "./button.css";

type ButtonProps = RecipeVariants<typeof styles.buttonStyle> &
  PropsWithChildren &
  (
    | ({ element?: "button" } & HTMLAttributes<HTMLButtonElement>)
    | ({ element?: "a" } & HTMLAttributes<HTMLAnchorElement>)
  );

const Button = ({
  element = "button",
  size = "m",
  type = "filled",
  theme = "primary",
  children,
  ...props
}: ButtonProps) => {
  return createElement(
    element,
    {
      ...props,
      className: classNames(
        styles.buttonStyle({ size, type, theme }),
        props.className
      ),
    },
    children
  );
};

export default Button;

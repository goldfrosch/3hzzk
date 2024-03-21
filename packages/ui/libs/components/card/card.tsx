import { createElement } from "react";
import type { HTMLAttributes, PropsWithChildren } from "react";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import classNames from "classnames";

import * as styles from "./card.css";

type CardProps = RecipeVariants<typeof styles.cardLayout> &
  PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

const Card = ({ theme = "mild", children, ...props }: CardProps) => {
  return createElement(
    "div",
    {
      ...props,
      className: classNames(styles.cardLayout({ theme }), props.className),
    },
    children
  );
};

export default Card;

import { createElement } from "react";
import type { HTMLAttributes, PropsWithChildren } from "react";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import classNames from "classnames";

import * as styles from "./card.css";

type CardProps = RecipeVariants<typeof styles.cardLayout> &
  PropsWithChildren &
  (
    | ({ element?: "div" } & HTMLAttributes<HTMLDivElement>)
    | ({ element?: "a" } & HTMLAttributes<HTMLAnchorElement>)
  );

const Card = ({
  theme = "mild",
  element = "div",
  children,
  ...props
}: CardProps) => {
  return createElement(
    element,
    {
      ...props,
      className: classNames(styles.cardLayout({ theme }), props.className),
    },
    children
  );
};

export default Card;

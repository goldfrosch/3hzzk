import { createElement } from "react";
import type { HTMLAttributes, PropsWithChildren } from "react";

import classNames from "classnames";

import * as styles from "./card.css";

type CardProps = PropsWithChildren &
  (
    | ({ element?: "div" } & HTMLAttributes<HTMLDivElement>)
    | ({ element?: "a" } & HTMLAttributes<HTMLAnchorElement>)
  );

const Card = ({ element = "div", children, ...props }: CardProps) => {
  return createElement(
    element,
    {
      className: classNames(styles.cardLayout, props.className),
      ...props,
    },
    children
  );
};

export default Card;

import type { ForwardedRef, InputHTMLAttributes } from "react";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as styles from "./input.css";
import classNames from "classnames";
import { ReactNode, forwardRef } from "react";

export type InputProps = RecipeVariants<typeof styles.inputLayoutStyle> &
  InputHTMLAttributes<HTMLInputElement> & {
    startItem?: ReactNode;
    endItem?: ReactNode;
  };

const InputLayout = forwardRef(
  (
    { size, startItem, endItem, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div
        className={classNames(
          styles.inputLayoutStyle({ size }),
          props.className
        )}
      >
        {startItem}
        <input ref={ref} {...props} className={styles.inputStyle} />
        {endItem}
      </div>
    );
  }
);

export default InputLayout;

import type { InputHTMLAttributes } from "react";
import type { RecipeVariants } from "@vanilla-extract/recipes";

import * as styles from "./input.css";
import classNames from "classnames";
import { ReactNode } from "react";

export type InputProps = RecipeVariants<typeof styles.inputLayoutStyle> &
  InputHTMLAttributes<HTMLInputElement> & {
    startItem: ReactNode;
    endItem: ReactNode;
  };

const InputLayout = ({ size, startItem, endItem, ...props }: InputProps) => {
  return (
    <div
      className={classNames(styles.inputLayoutStyle({ size }), props.className)}
    >
      {startItem}
      <input {...props} className={styles.inputStyle} />
      {endItem}
    </div>
  );
};

export default InputLayout;

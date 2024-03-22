import { Input, vars } from "@packages/ui";
import { X } from "@packages/ui/icons";
import {
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import * as styles from "./styles.css";

type VoteInputProps = {
  prefix: number;
  value: string;
  onWriteEnd?: (value: string) => void;
};

const VoteInput = ({ prefix, value, onWriteEnd }: VoteInputProps) => {
  const [isWriteEnd, setIsWriteEnd] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    onWriteEnd?.(value);

    if (value) {
      setIsWriteEnd(true);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter" && !e.nativeEvent.isComposing) {
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Input
      ref={(ref) => {
        if (ref) inputRef.current = ref;
      }}
      startItem={<div className={styles.inputPrefix}>{prefix}.</div>}
      endItem={isWriteEnd && <X size={12} color={vars.color.gray[0]} />}
      defaultValue={value}
      placeholder={"투표할 내용을 입력하세요"}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};

export default VoteInput;

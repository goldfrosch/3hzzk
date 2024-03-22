import { useState } from "react";
import type { VoteInput } from "@/features/vote/number-vote/vote-create-form";

const MAX_LIST_SIZE = 30;

export const useVoteForm = () => {
  const [inputList, setInputList] = useState<VoteInput[]>([
    { id: 1, value: "" },
  ]);

  const addInputList = (input: VoteInput) => {
    setInputList((list) => {
      const newInputList = list.slice();
      newInputList[list.findIndex((item) => item.id === input.id)].value =
        input.value;
      const lastNum = newInputList[inputList.length - 1].id;

      if (
        input.id === lastNum &&
        input.value &&
        inputList.length < MAX_LIST_SIZE
      ) {
        newInputList.push({
          id: lastNum + 1,
          value: "",
        });
      }

      return newInputList;
    });
  };

  const deleteInputList = (id: number) => {
    setInputList((list) => {
      const newInputList = list.slice().filter((item) => item.id !== id);

      return newInputList;
    });
  };

  return { inputList, addInputList, deleteInputList };
};

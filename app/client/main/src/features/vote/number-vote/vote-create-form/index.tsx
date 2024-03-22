import { properties } from "@packages/ui";

import { useVoteForm } from "./model/use-vote-form.hook";
import { VoteInput } from "./ui";

export const VoteCreateForm = () => {
  const { inputList, addInputList } = useVoteForm();

  return (
    <>
      <div
        className={properties({
          display: "flex",
          flexDirection: "column",
          gap: 12,
        })}
      >
        {inputList.map((input, index) => (
          <VoteInput
            key={input.id}
            prefix={index + 1}
            value={input.value}
            onWriteEnd={(value) => addInputList({ id: input.id, value })}
          />
        ))}
      </div>
    </>
  );
};

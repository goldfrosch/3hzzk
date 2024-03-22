import { Button, properties } from "@packages/ui";

import {
  useVoteForm,
  VoteInputItem,
} from "../../../../features/vote/number-vote/vote-create-form";

const VoteNumberCreateForm = () => {
  const { inputList, addInputList, deleteInputList } = useVoteForm();
  return (
    <>
      <div
        className={properties({ display: "flex", gap: 8, marginBottom: 12 })}
      >
        <Button isFullWidth={true}>시작 하기</Button>
        <Button isFullWidth={true}>종료 하기</Button>
      </div>
      <div
        className={properties({
          display: "flex",
          flexDirection: "column",
          gap: 12,
        })}
      >
        {inputList.map((input, index) => (
          <VoteInputItem
            key={input.id}
            prefix={index + 1}
            value={input.value}
            onDelete={() => deleteInputList(input.id)}
            onWriteEnd={(value) => addInputList({ id: input.id, value })}
          />
        ))}
      </div>
    </>
  );
};

export default VoteNumberCreateForm;

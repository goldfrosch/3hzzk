import { VoteCategoryList, VoteHeader } from "@/widgets/vote";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/vote")({
  component: () => (
    <>
      <VoteHeader />
      <VoteCategoryList />
    </>
  ),
});

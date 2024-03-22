import { Layout } from "@/shared/layout";
import { VoteCategoryList } from "@/components/vote/category";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/vote/")({
  component: () => (
    <Layout>
      <VoteCategoryList />
    </Layout>
  ),
});

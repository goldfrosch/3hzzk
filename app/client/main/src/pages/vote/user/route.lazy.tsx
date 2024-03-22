import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vote/user")({
  component: () => <div>Hello /vote/user!</div>,
});

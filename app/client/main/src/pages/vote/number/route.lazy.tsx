import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vote/number")({
  component: () => <div>Hello /vote/number!</div>,
});

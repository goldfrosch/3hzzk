import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

export default function Index() {
  return <>asdfasdf</>;
}

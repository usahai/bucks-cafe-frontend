import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/cafes/edit/")({
  component: () => (
    <div>
      Please select a cafe to edit from the <a href="/cafes">cafes</a> page
    </div>
  ),
});
